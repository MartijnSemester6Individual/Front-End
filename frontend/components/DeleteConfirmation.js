import { Dialog } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSession, signOut } from 'next-auth/react';


function DeleteConfirmation({ isOpen, setIsOpen, id }) {
  const router = useRouter();
  const { data: session } = useSession();

  const deleteAccount = async () => {
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/user/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: '' + session.accessToken,
      },
    });
    setIsOpen(false);
    signOut();
    return router.push('/');
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        as="div"
        className={clsx(
          'fixed inset-0 z-10 flex items-center justify-center overflow-y-auto bg-opacity-50',
          {
            'bg-gray-900': isOpen === true,
          },
        )}
      >
        <div className="flex flex-col px-4 py-8 text-center text-white bg-gray-800 w-96">
          <Dialog.Overlay />

          <Dialog.Title className="text-3xl text-red-500">Deactivate account</Dialog.Title>
          <Dialog.Description className="m-2 text-xl">
            This will permanently <strong>deactivate</strong> your account
          </Dialog.Description>

          <p className="m-4 text-md">
            Are you sure you want to deactivate your account? All of your data will be permanently
            deleted. This action cannot be undone.
          </p>

          <button
            className="inline-flex justify-center w-full px-4 py-2 m-4 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => deleteAccount()}
          >
            Deactivate
          </button>
          <button
            className="inline-flex justify-center w-full px-4 py-2 m-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Dialog>
    </>
  );
}
export default DeleteConfirmation;
