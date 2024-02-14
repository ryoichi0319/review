const Time = () => {
   
    function countdown(due){
        const now = new Date()
        const textTime = now.getTime()
        console.log(textTime,"texttime")
        const rest = due.getTime() - now.getTime()
        const sec = Math.floor(rest / 1000) % 60
        console.log(rest,"rest")
        const min = Math.floor(rest /1000 /60) % 60
        const hours = Math.floor(rest / 1000 / 60 /60 ) % 24
        const days = Math.floor(rest / 1000 / 60 / 60 /24);
        const count = [days, hours, min, sec]
        console.log(now)

        return count

    }

    let goal = new Date()
    goal.setHours(12)
    goal.setMinutes(2)
    goal.setSeconds(0)
    console.log(goal.getTime())
    console.log(goal,"goal")
    return(
        <div>
        </div>
    )
}
export default Time