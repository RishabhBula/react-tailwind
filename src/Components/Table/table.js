import React from 'react'

const table = () => {
    return (
        <div className="table-1">
            <table className='table-auto border border-slate-400 w-1/2 mx-auto text-center'>
                <thead>
                    <tr className='border border-slate-400'>
                        <th className='border border-slate-400'>
                            Sr. No.
                        </th>
                        <th className='border border-slate-400'>
                            Name
                        </th>
                        <th className='border border-slate-400'>
                            Last Name
                        </th>
                        <th className='border border-slate-400'>
                            Email
                        </th>
                        <th className='border border-slate-400'>
                            Number
                        </th>
                        <th className='border border-slate-400'>
                            City
                        </th>
                        <th className='border border-slate-400'>
                            State
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='border border-slate-400'>
                            1
                        </td>
                        <td className='border border-slate-400'>

                            Holly
                        </td>
                        <td className='border border-slate-400'>
                            molly
                        </td>
                        <td className='border border-slate-400'>
                            holly@
                        </td>
                        <td className='border border-slate-400'>
                            8965236589
                        </td>
                        <td className='border border-slate-400'>
                            dewas
                        </td>
                        <td className='border border-slate-400'>
                            madhya pradesh
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default table
