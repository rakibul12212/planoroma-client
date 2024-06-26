import CheckMark from "@/components/ui/CheckMark/CheckMark";
import Container from "@/components/ui/Container";
import useScrollGrowHook from "@/Hooks/scrollGrowHook";
import { motion } from "framer-motion";

const Gallery = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <Container className="pt-[131px]">
      <motion.div
        className="flex flex-wrap justify-center items-center gap-[70px] "
        style={style}
        ref={componentRef}
      >
        <div className="grid grid-cols-4  ">
          {/* Column 1 */}
          <div className="col-span-1 place-self-center">
            <div className="grid grid-cols-1 gap-1 ">
              <div>
                <img
                  src="https://i.ibb.co/xM12njv/Picture.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/d0nQHwf/Picture-1.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 place-self-center">
            <div className="grid grid-cols-1 gap-1">
              <div>
                <img
                  src="https://i.ibb.co/82Nq6Dt/Picture-2.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/RTsgFv1/Picture-3.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/7bVBLgg/Picture-4.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 place-self-center">
            <div className="grid grid-cols-1 gap-1">
              <div>
                <img
                  src="https://i.ibb.co/HqcQp2j/Picture-5.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/Bg9qX54/Picture-6.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/31Q4Y0n/Picture-7.png"
                  alt="imgimg"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="col-span-1 place-self-center">
            <div className="grid grid-cols-1 gap-1">
              <div>
                <img
                  src="https://i.ibb.co/kG7fHnZ/Picture-8.png"
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/zN8T9Jq/Picture-9.png"
                  alt="img"
                  className="object-cover  h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-[48px] pb-[24px]">Gallery</h1>
          <p className="text-[18px] max-w-[518px] pb-[35px]">
          Elevate your website with a visually engaging showcase for your images, maximizing viewer engagement.
          </p>
          <ol className=" text-[18px] pb-[40px] space-y-2">
            <div className="flex gap-2 items-center ">
              <CheckMark
                className="w-[20px] h-[20px]  rounded-full bg-gray-100 p-1 "
                children={undefined}
              />
              <li>One day pas access all lecture</li>
            </div>
            <div className="flex gap-2">
              <CheckMark
                className="w-[20px] h-[20px]  rounded-full bg-gray-100 p-1 "
                children={undefined}
              />
              <li>Lunch and Snack</li>
            </div>
            <div className="flex gap-2">
              <CheckMark
                className="w-[20px] h-[20px]  rounded-full bg-gray-100 p-1 "
                children={undefined}
              />
              <li>Meet Event Speaker</li>
            </div>
            <div className="flex gap-2">
              <CheckMark
                className="w-[20px] h-[20px]  rounded-full bg-gray-100 p-1 "
                children={undefined}
              />
              <li>Front Seat</li>
            </div>
            <div className="flex gap-2">
              <CheckMark
                className="w-[20px] h-[20px]  rounded-full bg-gray-100 p-1 "
                children={undefined}
              />
              <li>One day pas access all lecture</li>
            </div>
          </ol>
        </div>
      </motion.div>
    </Container>
  );
};

export default Gallery;
