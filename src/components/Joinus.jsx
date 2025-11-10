import React, { useState } from 'react'

const Joinus = () => {
    const [title, setTitle] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={(e) => {
                submitHandler(e)
                console.log("Form submitted by", title)
                setTitle('')
            }}>

                <input type="text" name="" id="" placeholder='Enter Your Name' value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <button>Submit</button>

            </form>

        </div>
    )
}

export default Joinus
