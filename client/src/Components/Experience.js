export function Experience1(props){
    return(
        <div>
            <input autocomplete="off" placeholder="Experience Heading 1" value={props.data.experienceHeading1} name="experienceHeading1" onChange={props.onChange}></input><br/>
            <textarea autocomplete="off" rows={3} cols={80} placeholder="Details about Experience 1" value={props.data.experienceDetail1} name="experienceDetail1" onChange={props.onChange}></textarea><br/>
            <input placeholder="Starting Month" list="month" autocomplete="off" name="experienceStartingMonth1" onChange={props.onChange}/>
            <MonthList />
            <input placeholder="Starting Year" list="year" autocomplete="off" name="experienceStartingYear1" onChange={props.onChange}/><br/>
            <YearList />
            <input placeholder="Ending Month" list="month" autocomplete="off" name="experienceEndingMonth1" onChange={props.onChange}/>
            <MonthList />
            <input placeholder="Ending Year" list="year" autocomplete="off" name="experienceEndingYear1" onChange={props.onChange}/><br/>
            <YearList />
        </div>
    )
}

export function Experience2(props){
    return(
        <div>
            <input autocomplete="off" placeholder="Experience Heading 2" value={props.data.experienceHeading2} name="experienceHeading2" onChange={props.onChange}/><br/>
            <textarea autocomplete="off" rows={3} cols={80} placeholder="Details about Experience 2" value={props.data.experienceDetail2} name="experienceDetail2" onChange={props.onChange}/><br/>
            <input placeholder="Starting Month" list="month" autocomplete="off" name="experienceStartingMonth2" onChange={props.onChange}/>
            <MonthList />
            <input placeholder="Starting Year" list="year" autocomplete="off" name="experienceStartingYear2" onChange={props.onChange}/><br/>
            <YearList />
            <input placeholder="Ending Month" list="month" autocomplete="off" name="experienceEndingMonth2" onChange={props.onChange}/>
            <MonthList />
            <input placeholder="Ending Year" list="year" autocomplete="off" name="experienceEndingYear2" onChange={props.onChange}/><br/>
            <YearList />
        </div>
    )
}

function MonthList(){
    const monthsList = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return(
        <datalist id="month">
            {monthsList.map((month) => (
                <option value={month} />
            ))}
        </datalist>
    )
}

function YearList(){
    const yearList = []
    for(var i = 2022; i>=1990; --i){
        yearList.push(i);
    }
    return(
        <datalist id="year">
            {
                yearList.map((year) => {
                    return(
                        <option value={year} />
                    )
                })
            }
        </datalist>
    )
}