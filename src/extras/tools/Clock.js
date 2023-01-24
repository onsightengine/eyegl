const _timer = (performance == null || typeof performance === 'undefined') ? Date : performance;

class Clock {

	#running = false;
	#startTime = 0;
	#elapsedTime = 0;
	#lastChecked = 0;
	#deltaCount = 0;

	constructor(autoStart = true, msRewind = 0) {
		if (autoStart) this.start();
		this.#startTime -= msRewind;
		this.#lastChecked -= msRewind;
	}

	start() {
		this.#startTime = _timer.now();
		this.#lastChecked = this.#startTime;
		this.#running = true;
	}

	stop() {
		this.getDeltaTime();
		this.#running = false;
	}

	reset() {
		this.#startTime = _timer.now();
		this.#lastChecked = this.#startTime;
		this.#elapsedTime = 0;
		this.#deltaCount = 0;
	}

	/** Time between start() or reset() and now (if running) or stop() (if not running) */
	getElapsedTime() {
		this.getDeltaTime();
		return this.#elapsedTime;
	}

	/** Returns delta time (time since last getDeltaTime() call) */
	getDeltaTime() {
		if (! this.#running) return 0;

        const newTime = _timer.now();
        const dt = (newTime - this.#lastChecked) / 1000;
        this.#lastChecked = newTime;
        this.#elapsedTime += dt;

		this.#deltaCount++;
		return dt;
	}

	/** Is clock running? */
	isRunning() {
		return this.#running;
	}

	/** Total number of times getDeltaTime() has been called since start() or reset() were called */
	count() {
		return this.#deltaCount;
	}

	/** Average delta time since start (in ms) */
	averageDelta() {
		return (this.#elapsedTime * 1000) / this.#deltaCount;
	}

}

export { Clock };
