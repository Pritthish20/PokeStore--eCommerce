import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Modal(
  {name,
    address,
    pincode,
    phoneNumber,
    setName,
    setAddress,
    setPincode,
    setPhoneNumber,
    buyNow}
) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="  text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full focus:outline-none text-[#0A0A0A] bg-primary hover:bg-[#C963E4] focus:ring-4 focus:ring-[#C963E4] py-2 text-center rounded-lg text-white font-bold "
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 bg-primary"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 bg-secondary text-left align-middle shadow-xl transition-all bg-gray-50">
                  <section className="">
                    <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0">
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                              <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Full Address
                              </label>
                              <input
                                type="text"
                                name="address"
                                value={address}
                                id="address"
                                onChange={(e) => setAddress(e.target.value)}
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Pincode
                              </label>
                              <input
                                type="text"
                                name="pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                id="pincode"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="block mb-2 text-sm font-medium text-gray-900"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                id="mobileNumber"
                                className=" border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                required
                              />
                            </div>
                          </form>
                          <button
                            onClick={() => {
                              buyNow();
                              closeModal();
                            }}
                            type="button"
                            className="focus:outline-none text-[#0A0A0A] bg-primary hover:bg-[#C963E4] focus:ring-4 focus:ring-[#C963E4] outline-0 font-medium rounded-lg text-sm px-5 py-2.5 "
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default Modal;
