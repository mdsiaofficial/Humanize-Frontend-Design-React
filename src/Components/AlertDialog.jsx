import React from 'react'

const AlertDialog = () => {
  return (
    <div className="flex flex-col p-6 max-w-lg bg-white rounded-md border border-solid border-slate-300 max-md:px-5">
      <div className="flex flex-col max-md:max-w-full">
        <div className="text-lg font-semibold leading-7 text-slate-900 max-md:max-w-full">
          Are you sure absolutely sure?
        </div>
        <div className="mt-2 text-sm leading-5 text-slate-500 max-md:max-w-full">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </div>
      </div>
      <div className="flex gap-2 pl-20 mt-4 text-sm font-medium leading-6 whitespace-nowrap max-md:flex-wrap max-md:pl-5">
        <div className="justify-center px-4 py-2 bg-white rounded-md border border-solid border-slate-200 text-slate-900">
          Cancel
        </div>
        <div className="justify-center px-4 py-2 text-white rounded-md bg-slate-900">
          Continue
        </div>
      </div>
    </div>
  );
}

export default AlertDialog
