
import React, { useContext, useState } from 'react';
import { baseUrl } from '../../services/BaseUrl';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const ManageIssue = () => {

    const {accessToken} = useContext(AuthContext)

    const [issueId, setIssueId] = useState(null)
    const [payReturnIssueId, setPayReturnIssueId] = useState(null);

    const handleRetrunBook = async (e)=>{

        e.preventDefault();

        const res = await fetch(`${baseUrl}/admin/return_book/${issueId}`,{
            method:"PUT",
            headers:{
                Authorization: `Bearer ${accessToken}`
            }
        })

        const data = await res.json();
        toast.success(data.message)
    }

   
    return (
        <div className="max-w-5xl mx-auto p-6">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">
                    Manage Issues
                </h1>

                <p className="text-gray-500 mt-1">
                    Issue and return books easily
                </p>
            </div>


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Issue Book Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <h2 className="text-lg font-semibold text-gray-900">
                       Return Book
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 mb-5">
                        Enter the Issue ID to Return a book.
                    </p>

                    <form onSubmit={handleRetrunBook}>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Issue ID
                        </label>

                        <input
                            value={issueId}
                            onChange={(e)=> setIssueId(e.target.value)}
                            type="number"
                            placeholder="Enter Issue ID"
                            required
                            min="1"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                        >
                            Return Book
                        </button>

                    </form>

                </div>


                {/* Return Book Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">

                    <h2 className="text-lg font-semibold text-gray-900">
                        Return With Fine Book
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 mb-5">
                        Enter the issue ID to return a book with fine.
                    </p>

                    <form >

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Issue ID
                        </label>

                        <input
                            type="number"
                            value={payReturnIssueId}
                            onChange={(e)=> setPayReturnIssueId(e.target.value)}
                            placeholder="Enter Issue ID"
                            required
                            min="1"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full mt-5 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
                        >
                            Return Book by Pay
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default ManageIssue;

