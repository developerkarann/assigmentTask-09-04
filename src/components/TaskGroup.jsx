import React from 'react'
import './css/taskgroup.css'

const TaskGroup = () => {

    const taskBoxs = [
        {
            content: 'Approve Content',
            isPending: true
        },
        {
            content: 'Create Content',
            isPending: true
        },
        {
            content: 'Approve Content',
            isPending: true
        },
        {
            content: 'Run Sample Test',
            isPending: true
        },
        {
            content: 'Launch Full Campaign',
            isPending: false
        },
    ]

    return (
        <>

            <div className="task-group">
                {
                    taskBoxs?.map((task, index) => (
                        <div className="tasks box" key={index}>
                            <div className="content-box">
                                <div className="content">
                                    <h4>{task.content}</h4>
                                </div>
                                <div className="polygon"></div>
                            </div>

                            {
                                task.isPending ? <>
                                    <div className="arrowIcon">
                                        <img src="/assets/icons/Arrow.png" alt="" />
                                    </div>
                                </> : " "
                            }
                            {
                                task.isPending ? <>
                                    <div className="status">
                                        <img src="/assets/icons/TimeCircle.png" alt="" />
                                        <div className="arrow">
                                            <img src="/assets/icons/Arrow.png" alt="" />
                                        </div>
                                        <img className='isPending' src="/assets/icons/Pending.png" alt="" />
                                    </div>
                                </> : " "
                            }
                        </div>

                    ))
                }

                <div className="icon">
                    <img src="/assets/icons/Plus.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default TaskGroup