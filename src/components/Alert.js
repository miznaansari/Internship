import React from 'react'

const Alert = (props) => {
    return (
        <>
            {props.alert ? (
                <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{position:"sticky",top:0}} role="alert">
                    <strong>{props.alert.type}!</strong>{props.alert.msg}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            ) : (
                <div className="mt-2"></div>
            )}
        </>
    )
}

export default Alert
