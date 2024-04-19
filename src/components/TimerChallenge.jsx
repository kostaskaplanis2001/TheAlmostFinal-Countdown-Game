export default function TimerChallenge({ title, targetTime }) {
    return <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-title">
            {targetTime} second{targetTime > 1 ? 's' : ''}
            <button>
                Start Challenge
            </button>
        </p>
        <p className="">
            Time is running... / Timer inactive
        </p>
    </section>
}