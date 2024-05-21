import { useEffect, useState } from "react";
import { Payment } from "./Payment";
import { Payment2 } from "./Payment2";
import { Payment3 } from "./Payment3";
import { TbMenuDeep } from "react-icons/tb";

export const Home = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const savedPage = JSON.parse(localStorage.getItem("num")!);
    if (savedPage) {
      setPage(savedPage);
    }
  }, []);

  const handlePageChange = (num: number) => {
    localStorage.setItem("num", JSON.stringify(num));
    setPage(num);
  };

  return (
    <div className="relative w-full h-full min-h-screen">
      <div className="w-full h-[100px] shadow-md md:shadow-none flex justify-end pr-3 py-5 ">
        <div className="text-[27px] md:hidden block">
          <TbMenuDeep />
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-[820px] md:bg-[#fcf2db] z-[-1]"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          clipPath: "polygon(0 0, 100% 0, 100% 44%, 0% 100%)",
        }}
      />
      <div className="w-full h-full flex items-center md:pt-[4rem] pt-5 flex-col justify-center">
        <div className="w-full max-w-[650px] h-full px-4 sm:px-8 md:px-0">
          <h2 className="text-[#4e598c] text-[34px] font-semibold text-center md:text-left">
            Complete your Purchase
          </h2>
          <div className="w-full mt-[50px]">
            <div className="flex justify-between w-full md:text-[23px] text-[16px] font-semibold text-[#bdbdbd]">
              <div className="relative">
                <h3
                  onClick={() => handlePageChange(1)}
                  className={`cursor-pointer ${
                    page === 1 ? "text-[#f1994b]" : ""
                  }`}
                >
                  Personal Info
                </h3>
                {page === 1 && (
                  <div className="bg-[#f1994b] h-[4px] w-full rounded-md absolute bottom-[-5px] left-0" />
                )}
              </div>
              <div className="relative">
                <h3
                  onClick={() => handlePageChange(2)}
                  className={`cursor-pointer ${
                    page === 2 ? "text-[#f1994b]" : ""
                  }`}
                >
                  Billing Info
                </h3>
                {page === 2 && (
                  <div className="bg-[#f1994b] h-[4px] w-full rounded-md absolute bottom-[-5px] left-0" />
                )}
              </div>
              <div className="relative">
                <h3
                  onClick={() => handlePageChange(3)}
                  className={`cursor-pointer ${
                    page === 3 ? "text-[#f1994b]" : ""
                  }`}
                >
                  Confirm Payment
                </h3>
                {page === 3 && (
                  <div className="bg-[#f1994b] h-[4px] w-full rounded-md absolute bottom-[-5px] left-0" />
                )}
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            {page === 1 && <Payment />}
            {page === 2 && <Payment2 />}
            {page === 3 && <Payment3 />}
          </div>
        </div>
      </div>
    </div>
  );
};
