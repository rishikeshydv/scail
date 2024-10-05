"use client";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import NewProp from "@/components/new-home/NewProp";
import { FaAlignRight } from "react-icons/fa6";
export default function details() {
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#0874de",
    },
  } satisfies ChartConfig;
  return (
    <main>
      <section className="h-[10vh] xl:h-[12vh] 2xl:h-[8vh] min-w-[100vw] overflow-hidden bg-black">
        <Navbar />
      </section>
      <section className="px-[40px] mt-6 md:mt-10">
        <div className="flex flex-col items-center p-4 md:flex-row md:items-start md:space-x-16">
          <div className="flex flex-col items-center space-y-12 md:w-1/2 md:overflow-y-auto">
            <div className="flex flex-col items-center space-y-4">
              <img
                src="/images/new-prop-img.jpeg"
                alt="Luxury villa in Texas"
                className="rounded-[40px]  md:h-[500px] w-[894px] object-cover aspect-auto"
              />
              <div className="flex space-x-2 overflow-scroll">
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 1"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 2"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 3"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 4"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 4"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 4"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 4"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                <img
                  src="/images/new-prop-img.jpeg"
                  alt="Thumbnail 4"
                  className="rounded-lg"
                  width="100"
                  height="100"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Mobile Screens */}
            <div className="md:hidden flex flex-col space-y-3 md:w-1/2 md:sticky md:top-0">
              <h1 className="text-[40px] font-bold mt-[-30px] md:mt-0 text-center">Luxury villa in Texas</h1>
              <div className="text-[30px] font-bold text-[#0874de] text-center">
                $6,89,000
              </div>
              <div className="text-gray-500 flex gap-1 justify-center">
                <span className="text-black font-semibold">Est. Payment:</span>{" "}
                $1,692/month{" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.62132 23.835L24.8344 8.6218L22.7132 6.50047L7.5 21.7137V23.835H9.62132ZM10.864 26.835H4.5V20.471L21.6525 3.31849C22.2384 2.73271 23.1881 2.73271 23.7738 3.31849L28.0166 7.56113C28.6023 8.14691 28.6023 9.09666 28.0166 9.68244L10.864 26.835ZM4.5 29.835H31.5V32.835H4.5V29.835Z"
                      fill="#0874DE"
                    />
                  </svg>
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="hotel-bed-line 1">
                      <path
                        id="Vector"
                        d="M58.6673 30.1917V54.1917H53.334V46.1917H10.6673V54.1917H5.33398V11.525H10.6673V38.1917H32.0006V19.525H48.0006C53.8916 19.525 58.6673 24.3007 58.6673 30.1917ZM53.334 38.1917V30.1917C53.334 27.2462 50.9462 24.8584 48.0006 24.8584H37.334V38.1917H53.334ZM21.334 30.1917C22.8067 30.1917 24.0007 28.9978 24.0007 27.525C24.0007 26.0523 22.8067 24.8584 21.334 24.8584C19.8612 24.8584 18.6673 26.0523 18.6673 27.525C18.6673 28.9978 19.8612 30.1917 21.334 30.1917ZM21.334 35.525C16.9157 35.525 13.334 31.9434 13.334 27.525C13.334 23.1068 16.9157 19.525 21.334 19.525C25.7523 19.525 29.334 23.1068 29.334 27.525C29.334 31.9434 25.7523 35.525 21.334 35.525Z"
                        fill="#0874DE"
                      />
                    </g>
                  </svg>
                  <div>Bedrooms</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9993 47.2931C8.18114 44.1283 2.66602 36.4635 2.66602 27.5105C2.66602 15.7284 12.2173 6.17712 23.9993 6.17712C33.0524 6.17712 40.7884 11.8162 43.8863 19.7735C44.7863 19.6009 45.7156 19.5105 46.666 19.5105C54.7663 19.5105 61.3327 26.0769 61.3327 34.1771C61.3327 40.8907 56.822 46.5505 50.666 48.2918V42.6123C53.8194 41.1145 55.9994 37.9003 55.9994 34.1771C55.9994 29.0225 51.8207 24.8438 46.666 24.8438C44.054 24.8438 41.693 25.9166 39.9988 27.6457C39.9991 27.6006 39.9994 27.5555 39.9994 27.5105C39.9994 18.6739 32.8359 11.5105 23.9993 11.5105C15.1628 11.5105 7.99935 18.6739 7.99935 27.5105C7.99935 33.4326 11.2169 38.6035 15.9993 41.3699V47.2931ZM26.666 46.1771C23.7205 46.1771 21.3327 43.7894 21.3327 40.8438C21.3327 37.8982 23.7205 35.5105 26.666 35.5105C29.6116 35.5105 31.9993 37.8982 31.9993 40.8438C31.9993 43.7894 29.6116 46.1771 26.666 46.1771ZM39.9994 54.1771C37.0537 54.1771 34.666 51.7894 34.666 48.8438C34.666 45.8982 37.0537 43.5105 39.9994 43.5105C42.945 43.5105 45.3327 45.8982 45.3327 48.8438C45.3327 51.7894 42.945 54.1771 39.9994 54.1771ZM26.666 62.1771C23.7205 62.1771 21.3327 59.7894 21.3327 56.8438C21.3327 53.8982 23.7205 51.5105 26.666 51.5105C29.6116 51.5105 31.9993 53.8982 31.9993 56.8438C31.9993 59.7894 29.6116 62.1771 26.666 62.1771Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>Bathrooms</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 51.5249H50.6667V14.1916H13.3333V51.5249ZM8 11.5249C8 10.0522 9.19392 8.85828 10.6667 8.85828H53.3333C54.8061 8.85828 56 10.0522 56 11.5249V54.1916C56 55.6644 54.8061 56.8583 53.3333 56.8583H10.6667C9.19392 56.8583 8 55.6644 8 54.1916V11.5249ZM26.6667 22.1916V30.1916H37.3333V22.1916L48 32.8583L37.3333 43.5249V35.5249H26.6667V43.5249L16 32.8583L26.6667 22.1916Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>Living area</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.8744 22.3858L49.5113 18.013L51.4049 16.1161C51.5959 15.9313 51.7483 15.7103 51.8531 15.4659C51.9578 15.2215 52.013 14.9587 52.0153 14.6927C52.0176 14.4267 51.967 14.163 51.8665 13.9168C51.7659 13.6706 51.6175 13.447 51.4297 13.2589C51.242 13.0708 51.0187 12.9221 50.773 12.8214C50.5272 12.7207 50.2639 12.67 49.9984 12.6723C49.7329 12.6746 49.4706 12.7299 49.2266 12.8348C48.9826 12.9398 48.762 13.0924 48.5775 13.2837L46.684 15.1807L42.3189 10.8099C40.9431 9.49655 39.1155 8.76392 37.215 8.76392C35.3145 8.76392 33.4869 9.49655 32.1111 10.8099C31.4403 11.4813 30.9082 12.2785 30.5452 13.156C30.1822 14.0334 29.9953 14.974 29.9953 15.9238C29.9953 16.8736 30.1822 17.8142 30.5452 18.6916C30.9082 19.5691 31.4403 20.3663 32.1111 21.0377L36.4741 25.4084L24.6886 37.2146L20.3236 32.8439C18.9477 31.5305 17.1201 30.7979 15.2197 30.7979C13.3192 30.7979 11.4916 31.5305 10.1158 32.8439C9.44502 33.5152 8.91292 34.3124 8.54989 35.1899C8.18686 36.0674 8 37.0079 8 37.9577C8 38.9076 8.18686 39.8481 8.54989 40.7256C8.91292 41.6031 9.44502 42.4003 10.1158 43.0716L14.4788 47.4424L12.5852 49.3393C12.3942 49.524 12.2419 49.7451 12.1371 49.9895C12.0323 50.2338 11.9772 50.4967 11.9749 50.7627C11.9726 51.0286 12.0231 51.2924 12.1237 51.5386C12.2242 51.7847 12.3727 52.0084 12.5604 52.1965C12.7482 52.3845 12.9714 52.5333 13.2172 52.634C13.4629 52.7347 13.7262 52.7854 13.9917 52.7831C14.2572 52.7808 14.5196 52.7255 14.7636 52.6205C15.0075 52.5155 15.2282 52.3629 15.4126 52.1716L17.3062 50.2747L21.6713 54.6454C22.3414 55.3171 23.1371 55.8498 24.0129 56.2133C24.8886 56.5768 25.8273 56.7639 26.7752 56.7639C27.7231 56.7639 28.6618 56.5768 29.5375 56.2133C30.4133 55.8498 31.209 55.3171 31.8791 54.6454C32.5498 53.9743 33.0818 53.1772 33.4448 52.2999C33.8079 51.4226 33.9947 50.4823 33.9947 49.5326C33.9947 48.5829 33.8079 47.6425 33.4448 46.7652C33.0818 45.8879 32.5498 45.0909 31.8791 44.4197L27.516 40.049L39.3135 28.2408L43.6766 32.6115C44.3467 33.2831 45.1424 33.8159 46.0182 34.1794C46.8939 34.5429 47.8326 34.73 48.7805 34.73C49.7284 34.73 50.6671 34.5429 51.5428 34.1794C52.4186 33.8159 53.2143 33.2831 53.8844 32.6115C54.5551 31.9403 55.0871 31.1433 55.4501 30.266C55.8132 29.3887 56 28.4483 56 27.4986C56 26.5489 55.8132 25.6086 55.4501 24.7313C55.0871 23.854 54.5551 23.0569 53.8844 22.3858H53.8744ZM29.9955 49.5336C29.9964 49.9572 29.9134 50.3767 29.7514 50.768C29.5894 51.1592 29.3516 51.5145 29.0517 51.8131C28.4388 52.4004 27.6234 52.7282 26.7752 52.7282C25.927 52.7282 25.1116 52.4004 24.4987 51.8131L12.9432 40.2373C12.3394 39.6324 12.0002 38.8121 12.0002 37.9567C12.0002 37.1014 12.3394 36.2811 12.9432 35.6762C13.5469 35.0714 14.3658 34.7316 15.2197 34.7316C16.0735 34.7316 16.8924 35.0714 17.4962 35.6762L29.0517 47.2521C29.3518 47.5509 29.5898 47.9065 29.7518 48.2981C29.9138 48.6897 29.9966 49.1096 29.9955 49.5336ZM51.047 29.7791C50.4341 30.3665 49.6187 30.6943 48.7705 30.6943C47.9223 30.6943 47.1069 30.3665 46.494 29.7791L34.9385 18.2033C34.6395 17.9038 34.4024 17.5483 34.2406 17.157C34.0788 16.7657 33.9955 16.3463 33.9955 15.9228C33.9955 15.0674 34.3347 14.2471 34.9385 13.6423C35.5422 13.0375 36.3611 12.6977 37.215 12.6977C38.0688 12.6977 38.8877 13.0375 39.4915 13.6423L51.047 25.2181C51.3462 25.5175 51.5836 25.8729 51.7456 26.2643C51.9075 26.6556 51.9909 27.075 51.9909 27.4986C51.9909 27.9222 51.9075 28.3417 51.7456 28.733C51.5836 29.1243 51.3462 29.4798 51.047 29.7791Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>Gym</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M32.5105 37.3163C32.1255 36.9733 31.5148 37.0608 31.2523 37.5053C29.7719 40.0095 30.1113 43.5969 28.7849 43.5969C28.1567 43.5969 28.2547 42.5119 27.9589 41.84C27.7489 41.3657 27.112 41.2922 26.7847 41.6965C25.5318 43.2434 24.3278 45.9716 25.4373 48.6351C26.6237 51.4858 29.3029 53.4983 32.3863 53.318C36.0751 53.101 38.9992 50.0421 38.9992 46.3006C38.9992 42.6047 34.9009 39.4495 32.5105 37.3163ZM34.0259 50.6021C32.941 51.8673 30.9951 51.8673 29.9119 50.6021C28.9739 49.5083 29.1559 47.8371 30.1743 46.8186L31.3678 45.6251C31.7003 45.2927 32.2375 45.2927 32.57 45.6251L33.7634 46.8186C34.7819 47.8371 34.9639 49.5101 34.0259 50.6021ZM51.2487 49.8286V20.4956L52.7222 17.5661L52.8569 17.2039C53.2121 15.7829 52.8989 14.3024 51.9959 13.1474C51.0947 11.9925 49.735 11.3292 48.2703 11.3292H15.7287C14.264 11.3292 12.9043 11.9925 12.0031 13.1474C11.1019 14.3024 10.7869 15.7811 11.1439 17.2039L12.7503 20.4676V49.8286C11.7844 49.8286 11.0004 50.6126 11.0004 51.5785C11.0004 52.5445 11.7844 53.3285 12.7503 53.3285H21.5C22.4659 53.3285 23.2499 52.5445 23.2499 51.5785V36.5288C23.2499 34.3483 24.6008 32.3761 26.615 31.6236C30.3108 30.2377 33.6882 30.2377 37.384 31.6236C39.3965 32.3779 40.7492 34.3483 40.7492 36.5288V51.5785C40.7492 52.5445 41.5331 53.3285 42.4991 53.3285H51.2487C52.2147 53.3285 52.9986 52.5445 52.9986 51.5785C52.9986 50.6126 52.2147 49.8286 51.2487 49.8286ZM14.761 15.3017C14.8992 15.1249 15.2072 14.8292 15.7287 14.8292H48.2703C48.7918 14.8292 49.0998 15.1249 49.2381 15.3017C49.3605 15.4609 49.5443 15.7759 49.49 16.2029L48.4208 18.3291H15.58L14.5107 16.2029C14.4565 15.7741 14.6402 15.4609 14.7627 15.3017H14.761ZM38.6125 28.3459C34.1274 26.666 29.8716 26.666 25.3848 28.3459C22.0144 29.6094 19.7483 32.8976 19.7483 36.5288V49.8286H16.2484V21.829H47.7471V49.8286H44.2473V36.5288C44.2473 32.8976 41.9829 29.6094 38.6107 28.3459H38.6125Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>Fireplace</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8402 37.8465H41.1598V43.3456H44.8237V17.6832C44.8237 15.6705 46.4615 14.0245 48.473 14.0171L50.3544 14.0098L50.3379 10.3438L48.4583 10.3511C44.4335 10.3676 41.1616 13.6579 41.1616 17.6832V23.1823H22.8402V17.6832C22.8402 15.6705 24.478 14.0245 26.4895 14.0171L28.3709 14.0098L28.3544 10.3438L26.4748 10.3511C22.45 10.3676 19.1781 13.6579 19.1781 17.6832V43.3456H22.842L22.8402 37.8465ZM41.1598 26.8483V34.1804H22.8402V26.8483H41.1598ZM54 51.8362C52.6077 53.4291 50.5999 54.3438 48.4876 54.3438C46.3003 54.3438 44.3364 53.3796 42.9918 51.8563C41.6471 53.3814 39.6832 54.3438 37.4959 54.3438C35.3085 54.3438 33.3447 53.3796 32 51.8563C30.6553 53.3814 28.6915 54.3438 26.5041 54.3438C24.3168 54.3438 22.3529 53.3796 21.0082 51.8563C19.6636 53.3814 17.6997 54.3438 15.5124 54.3438C13.4019 54.3438 11.3923 53.4291 10 51.8362L12.7589 49.4239C13.4551 50.2213 14.459 50.6777 15.5124 50.6777C17.533 50.6777 19.1763 49.0335 19.1763 47.0116H22.8402C22.8402 49.0335 24.4835 50.6777 26.5041 50.6777C28.5248 50.6777 30.168 49.0335 30.168 47.0116H33.832C33.832 49.0335 35.4752 50.6777 37.4959 50.6777C39.5165 50.6777 41.1598 49.0335 41.1598 47.0116H44.8237C44.8237 49.0335 46.467 50.6777 48.4876 50.6777C49.541 50.6777 50.5449 50.2194 51.2411 49.4239L54 51.8362Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>Swimming</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.25 11.6709H40.75C39.7822 11.6709 39 12.4531 39 13.4209C39 14.3886 39.7822 15.1709 40.75 15.1709H44.25C47.1445 15.1709 49.5 17.5264 49.5 20.4209V33.9431C48.9715 34.2511 48.3713 34.4209 47.75 34.4209C46.1942 34.4209 44.6122 33.3954 44.1485 32.0881C43.9017 31.3881 43.2402 30.9209 42.5 30.9209C41.7598 30.9209 41.0965 31.3881 40.8515 32.0881C40.3878 33.3954 38.8057 34.4209 37.25 34.4209C35.6943 34.4209 34.1122 33.3954 33.6502 32.0881C33.4035 31.3899 32.742 30.9209 32 30.9209C31.258 30.9209 30.5965 31.3899 30.3498 32.0881C29.8878 33.3954 28.3075 34.4209 26.75 34.4209C25.1925 34.4209 23.6122 33.3954 23.1502 32.0881C22.9035 31.3899 22.242 30.9209 21.5 30.9209C20.758 30.9209 20.0965 31.3899 19.8498 32.0881C19.3878 33.3954 17.8075 34.4209 16.25 34.4209C15.6287 34.4209 15.0285 34.2511 14.5 33.9431V20.4209C14.5 17.5264 16.8555 15.1709 19.75 15.1709H23.25C24.216 15.1709 25 14.3886 25 13.4209C25 12.4531 24.216 11.6709 23.25 11.6709H19.75C14.9253 11.6709 11 15.5961 11 20.4209V44.9209C11 49.7456 14.9253 53.6709 19.75 53.6709H44.25C49.0747 53.6709 53 49.7456 53 44.9209V20.4209C53 15.5961 49.0747 11.6709 44.25 11.6709ZM44.25 50.1709H19.75C16.8555 50.1709 14.5 47.8154 14.5 44.9209V37.6706C15.0687 37.8176 15.6515 37.9209 16.25 37.9209C18.2222 37.9209 20.1385 37.0949 21.5 35.7771C22.8615 37.0949 24.7778 37.9209 26.75 37.9209C28.7222 37.9209 30.6385 37.0949 32 35.7771C33.3615 37.0949 35.276 37.9209 37.25 37.9209C39.224 37.9209 41.1385 37.0949 42.5 35.7754C43.8615 37.0949 45.776 37.9209 47.75 37.9209C48.3485 37.9209 48.9313 37.8176 49.5 37.6706V44.9209C49.5 47.8154 47.1445 50.1709 44.25 50.1709ZM32 27.4209C33.6362 27.4209 35.1728 26.7839 36.3313 25.6271C38.7183 23.2401 38.7183 19.3534 36.3995 17.0381L34.058 14.4149C33.0132 13.2389 30.9868 13.2406 29.942 14.4149L27.667 16.9681C25.28 19.3551 25.28 23.2419 27.667 25.6289C28.8237 26.7856 30.362 27.4226 31.9982 27.4226L32 27.4209Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>Water Supply</div>
                </div>
                <div className="flex flex-col items-center p-[23px] border rounded-lg bg-[#0874de]">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.798584"
                      width="50"
                      height="50"
                      rx="25"
                      fill="white"
                    />
                    <rect
                      x="0.657895"
                      y="1.45648"
                      width="48.6842"
                      height="48.6842"
                      rx="24.3421"
                      stroke="black"
                      stroke-opacity="0.05"
                      stroke-width="1.31579"
                    />
                    <path
                      d="M29.1169 24.8116L23.8235 19.5182L25.2191 18.1226L32.8949 25.7984L25.2191 33.4742L23.8235 32.0786L29.1169 26.7853H17.1055V24.8116H29.1169Z"
                      fill="#0874DE"
                    />
                  </svg>

                  <div>40+ Amenities</div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="default"
                  className="bg-[#0874de] text-white rounded-[50px]"
                >
                  Request tour&nbsp;
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1287 8.99992L8.1057 4.97692L9.16635 3.91626L15 9.74992L9.16635 15.5835L8.1057 14.5229L12.1287 10.4999H3V8.99992H12.1287Z"
                      fill="white"
                    />
                  </svg>
                </Button>
                <Button
                  variant="default"
                  className="bg-black text-white rounded-[50px]"
                >
                  Contact agent&nbsp;
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1287 8.99992L8.1057 4.97692L9.16635 3.91626L15 9.74992L9.16635 15.5835L8.1057 14.5229L12.1287 10.4999H3V8.99992H12.1287Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </div>
              {/* Mobile Screens */}
              <div className="bg-bg-prop-ai py-6 rounded-[16px]">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                      PropAI Price Estimator
                    </h2>
                    <p className="mt-2 text-muted-foreground md:text-md">
                      Get your personalized price estimate for this property.
                    </p>
                    <div className="mt-2">
                      <span className="block text-5xl font-bold text-[#0874de]">
                        $725,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Suggested Properties */}
            <div className="space-y-8">
              <div className="space-y-5">
                <h2 className="text-[30px] md:text-[40px] font-bold">Suggested Properties</h2>
                <h3 className="text-[25px] font-semibold">Local Information</h3>
                <div className="relative w-full bg-gray-200">
                  <img
                    src="/images/map-placeholder.png"
                    alt="Map"
                    className="rounded-[10px] h-[400px] w-[894px] object-cover aspect-auto"
                  />
                  <div className="absolute bottom-4 px-2 grid grid-cols-3 md:grid-cols-6 items-center gap-2">
                    <Button variant="outline" className="bg-[#0874de]">
                      Map
                    </Button>
                    <Button variant="outline">Schools</Button>
                    <Button variant="outline">Shop & Eat</Button>
                    <Button variant="outline">Map</Button>
                    <Button variant="outline">Schools</Button>
                    <Button variant="outline">Shop & Eat</Button>
                  </div>
                </div>
                <p className="text-base text-[18px] text-[#808080]">
                  Spacious and Bright Townhouse 1 Bedroom, 1 LOFT/Den, 1 FULL
                  BATH & 1 HALF BATH. WASHER AND DRYER, GAS STOVE AND WATER
                  HEATER. STORAGE. WATER VIEW WITH SCREENED-IN PATIO. ASSIGNED
                  PARKING SPACE IN FRONT OF RESIDENCE.PET FRIENDLY. EASY ACCESS
                  TO SAWGRASS EXPRESSWAY A RATED SCHOOLS.LOW MAINTENANCE FEE $
                  300. Tenant Occupied.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-[25px] font-semibold">Interior</h3>
                <div className="grid grid-cols-1 gap-4 p-[34px] bg-gray-100 rounded-lg md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h4 className="text-lg font-semibold">Bedrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Bedrooms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bathrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Total Bathrooms : 2</li>
                      <li className="mt-[8px]">Full Bathrooms : 1</li>
                      <li className="mt-[8px]">1/2 Bathrooms : 1</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Appliances</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Dishwasher</li>
                      <li className="mt-[8px]">GasRange</li>
                      <li className="mt-[8px]">GasWaterHeater</li>
                      <li className="mt-[8px]">Refrigerator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Interior Features</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">FirstFloorEntry</li>
                      <li className="mt-[8px]">LivingDiningRoom</li>
                      <li className="mt-[8px]">Pantry</li>
                      <li className="mt-[8px]">UpperLevelPrimary</li>
                      <li className="mt-[8px]">Flooring: Tile</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">
                      Heating and Cooling
                    </h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">
                        Cooling Features: Central Air
                      </li>
                      <li className="mt-[8px]">Heating Features: Central</li>
                      <li className="mt-[8px]">Heating: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-[25px] font-semibold">Interior</h3>
                <div className="grid grid-cols-1 gap-4 p-[34px] bg-gray-100 rounded-lg md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h4 className="text-lg font-semibold">Bedrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Bedrooms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bathrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Total Bathrooms : 2</li>
                      <li className="mt-[8px]">Full Bathrooms : 1</li>
                      <li className="mt-[8px]">1/2 Bathrooms : 1</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Appliances</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Dishwasher</li>
                      <li className="mt-[8px]">GasRange</li>
                      <li className="mt-[8px]">GasWaterHeater</li>
                      <li className="mt-[8px]">Refrigerator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Interior Features</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">FirstFloorEntry</li>
                      <li className="mt-[8px]">LivingDiningRoom</li>
                      <li className="mt-[8px]">Pantry</li>
                      <li className="mt-[8px]">UpperLevelPrimary</li>
                      <li className="mt-[8px]">Flooring: Tile</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">
                      Heating and Cooling
                    </h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">
                        Cooling Features: Central Air
                      </li>
                      <li className="mt-[8px]">Heating Features: Central</li>
                      <li className="mt-[8px]">Heating: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-[25px] font-semibold">Interior</h3>
                <div className="grid grid-cols-1 gap-4 p-[34px] bg-gray-100 rounded-lg md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h4 className="text-lg font-semibold">Bedrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Bedrooms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bathrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Total Bathrooms : 2</li>
                      <li className="mt-[8px]">Full Bathrooms : 1</li>
                      <li className="mt-[8px]">1/2 Bathrooms : 1</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Appliances</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Dishwasher</li>
                      <li className="mt-[8px]">GasRange</li>
                      <li className="mt-[8px]">GasWaterHeater</li>
                      <li className="mt-[8px]">Refrigerator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Interior Features</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">FirstFloorEntry</li>
                      <li className="mt-[8px]">LivingDiningRoom</li>
                      <li className="mt-[8px]">Pantry</li>
                      <li className="mt-[8px]">UpperLevelPrimary</li>
                      <li className="mt-[8px]">Flooring: Tile</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">
                      Heating and Cooling
                    </h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">
                        Cooling Features: Central Air
                      </li>
                      <li className="mt-[8px]">Heating Features: Central</li>
                      <li className="mt-[8px]">Heating: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-[25px] font-semibold">Interior</h3>
                <div className="grid grid-cols-1 gap-4 p-[34px] bg-gray-100 rounded-lg md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <h4 className="text-lg font-semibold">Bedrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Bedrooms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Bathrooms</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Total Bathrooms : 2</li>
                      <li className="mt-[8px]">Full Bathrooms : 1</li>
                      <li className="mt-[8px]">1/2 Bathrooms : 1</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Appliances</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">Dishwasher</li>
                      <li className="mt-[8px]">GasRange</li>
                      <li className="mt-[8px]">GasWaterHeater</li>
                      <li className="mt-[8px]">Refrigerator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Interior Features</h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">FirstFloorEntry</li>
                      <li className="mt-[8px]">LivingDiningRoom</li>
                      <li className="mt-[8px]">Pantry</li>
                      <li className="mt-[8px]">UpperLevelPrimary</li>
                      <li className="mt-[8px]">Flooring: Tile</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">
                      Heating and Cooling
                    </h4>
                    <ul className="list-disc list-inside text-[#808080]">
                      <li className="mt-[8px]">
                        Cooling Features: Central Air
                      </li>
                      <li className="mt-[8px]">Heating Features: Central</li>
                      <li className="mt-[8px]">Heating: Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-[25px] font-bold">
                    Property Taxes and Assessment
                  </h2>
                  <div className="border rounded-md overflow-hidden">
                    <div className="grid grid-cols-2 p-4 bg-gray-100">
                      <div className="font-bold">Year</div>
                      <div>2023</div>
                    </div>
                    <div className="grid grid-cols-2 p-4">
                      <div className="font-bold">Tax</div>
                      <div>$2,726</div>
                    </div>
                    <div className="grid grid-cols-2 p-4 bg-gray-100">
                      <div className="font-bold">Assessment</div>
                      <div>$213,600</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home facts updated by county records
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="text-[25px] font-bold">Price Trends</h2>
                  <ChartContainer config={chartConfig} className="border-1 p-4">
                    <AreaChart
                      accessibilityLayer
                      data={chartData}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                      />
                      <defs>
                        <linearGradient
                          id="fillDesktop"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="desktop"
                        type="natural"
                        fill="url(#fillDesktop)"
                        fillOpacity={0.4}
                        stroke="var(--color-desktop)"
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </div>
            </div>
          </div>
          {/* Large Screens */}
          <div className="hidden md:flex flex-col space-y-3 md:w-1/2 md:sticky md:top-20">
            <h1 className="text-[40px] font-bold">Luxury villa in Texas</h1>
            <div className="text-[30px] font-bold text-[#0874de]">
              $6,89,000
            </div>
            <div className="text-gray-500 flex gap-1">
              <span className="text-black font-semibold">Est. Payment:</span>{" "}
              $1,692/month{" "}
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.62132 23.835L24.8344 8.6218L22.7132 6.50047L7.5 21.7137V23.835H9.62132ZM10.864 26.835H4.5V20.471L21.6525 3.31849C22.2384 2.73271 23.1881 2.73271 23.7738 3.31849L28.0166 7.56113C28.6023 8.14691 28.6023 9.09666 28.0166 9.68244L10.864 26.835ZM4.5 29.835H31.5V32.835H4.5V29.835Z"
                    fill="#0874DE"
                  />
                </svg>
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="hotel-bed-line 1">
                    <path
                      id="Vector"
                      d="M58.6673 30.1917V54.1917H53.334V46.1917H10.6673V54.1917H5.33398V11.525H10.6673V38.1917H32.0006V19.525H48.0006C53.8916 19.525 58.6673 24.3007 58.6673 30.1917ZM53.334 38.1917V30.1917C53.334 27.2462 50.9462 24.8584 48.0006 24.8584H37.334V38.1917H53.334ZM21.334 30.1917C22.8067 30.1917 24.0007 28.9978 24.0007 27.525C24.0007 26.0523 22.8067 24.8584 21.334 24.8584C19.8612 24.8584 18.6673 26.0523 18.6673 27.525C18.6673 28.9978 19.8612 30.1917 21.334 30.1917ZM21.334 35.525C16.9157 35.525 13.334 31.9434 13.334 27.525C13.334 23.1068 16.9157 19.525 21.334 19.525C25.7523 19.525 29.334 23.1068 29.334 27.525C29.334 31.9434 25.7523 35.525 21.334 35.525Z"
                      fill="#0874DE"
                    />
                  </g>
                </svg>
                <div>Bedrooms</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9993 47.2931C8.18114 44.1283 2.66602 36.4635 2.66602 27.5105C2.66602 15.7284 12.2173 6.17712 23.9993 6.17712C33.0524 6.17712 40.7884 11.8162 43.8863 19.7735C44.7863 19.6009 45.7156 19.5105 46.666 19.5105C54.7663 19.5105 61.3327 26.0769 61.3327 34.1771C61.3327 40.8907 56.822 46.5505 50.666 48.2918V42.6123C53.8194 41.1145 55.9994 37.9003 55.9994 34.1771C55.9994 29.0225 51.8207 24.8438 46.666 24.8438C44.054 24.8438 41.693 25.9166 39.9988 27.6457C39.9991 27.6006 39.9994 27.5555 39.9994 27.5105C39.9994 18.6739 32.8359 11.5105 23.9993 11.5105C15.1628 11.5105 7.99935 18.6739 7.99935 27.5105C7.99935 33.4326 11.2169 38.6035 15.9993 41.3699V47.2931ZM26.666 46.1771C23.7205 46.1771 21.3327 43.7894 21.3327 40.8438C21.3327 37.8982 23.7205 35.5105 26.666 35.5105C29.6116 35.5105 31.9993 37.8982 31.9993 40.8438C31.9993 43.7894 29.6116 46.1771 26.666 46.1771ZM39.9994 54.1771C37.0537 54.1771 34.666 51.7894 34.666 48.8438C34.666 45.8982 37.0537 43.5105 39.9994 43.5105C42.945 43.5105 45.3327 45.8982 45.3327 48.8438C45.3327 51.7894 42.945 54.1771 39.9994 54.1771ZM26.666 62.1771C23.7205 62.1771 21.3327 59.7894 21.3327 56.8438C21.3327 53.8982 23.7205 51.5105 26.666 51.5105C29.6116 51.5105 31.9993 53.8982 31.9993 56.8438C31.9993 59.7894 29.6116 62.1771 26.666 62.1771Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>Bathrooms</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 51.5249H50.6667V14.1916H13.3333V51.5249ZM8 11.5249C8 10.0522 9.19392 8.85828 10.6667 8.85828H53.3333C54.8061 8.85828 56 10.0522 56 11.5249V54.1916C56 55.6644 54.8061 56.8583 53.3333 56.8583H10.6667C9.19392 56.8583 8 55.6644 8 54.1916V11.5249ZM26.6667 22.1916V30.1916H37.3333V22.1916L48 32.8583L37.3333 43.5249V35.5249H26.6667V43.5249L16 32.8583L26.6667 22.1916Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>Living area</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.8744 22.3858L49.5113 18.013L51.4049 16.1161C51.5959 15.9313 51.7483 15.7103 51.8531 15.4659C51.9578 15.2215 52.013 14.9587 52.0153 14.6927C52.0176 14.4267 51.967 14.163 51.8665 13.9168C51.7659 13.6706 51.6175 13.447 51.4297 13.2589C51.242 13.0708 51.0187 12.9221 50.773 12.8214C50.5272 12.7207 50.2639 12.67 49.9984 12.6723C49.7329 12.6746 49.4706 12.7299 49.2266 12.8348C48.9826 12.9398 48.762 13.0924 48.5775 13.2837L46.684 15.1807L42.3189 10.8099C40.9431 9.49655 39.1155 8.76392 37.215 8.76392C35.3145 8.76392 33.4869 9.49655 32.1111 10.8099C31.4403 11.4813 30.9082 12.2785 30.5452 13.156C30.1822 14.0334 29.9953 14.974 29.9953 15.9238C29.9953 16.8736 30.1822 17.8142 30.5452 18.6916C30.9082 19.5691 31.4403 20.3663 32.1111 21.0377L36.4741 25.4084L24.6886 37.2146L20.3236 32.8439C18.9477 31.5305 17.1201 30.7979 15.2197 30.7979C13.3192 30.7979 11.4916 31.5305 10.1158 32.8439C9.44502 33.5152 8.91292 34.3124 8.54989 35.1899C8.18686 36.0674 8 37.0079 8 37.9577C8 38.9076 8.18686 39.8481 8.54989 40.7256C8.91292 41.6031 9.44502 42.4003 10.1158 43.0716L14.4788 47.4424L12.5852 49.3393C12.3942 49.524 12.2419 49.7451 12.1371 49.9895C12.0323 50.2338 11.9772 50.4967 11.9749 50.7627C11.9726 51.0286 12.0231 51.2924 12.1237 51.5386C12.2242 51.7847 12.3727 52.0084 12.5604 52.1965C12.7482 52.3845 12.9714 52.5333 13.2172 52.634C13.4629 52.7347 13.7262 52.7854 13.9917 52.7831C14.2572 52.7808 14.5196 52.7255 14.7636 52.6205C15.0075 52.5155 15.2282 52.3629 15.4126 52.1716L17.3062 50.2747L21.6713 54.6454C22.3414 55.3171 23.1371 55.8498 24.0129 56.2133C24.8886 56.5768 25.8273 56.7639 26.7752 56.7639C27.7231 56.7639 28.6618 56.5768 29.5375 56.2133C30.4133 55.8498 31.209 55.3171 31.8791 54.6454C32.5498 53.9743 33.0818 53.1772 33.4448 52.2999C33.8079 51.4226 33.9947 50.4823 33.9947 49.5326C33.9947 48.5829 33.8079 47.6425 33.4448 46.7652C33.0818 45.8879 32.5498 45.0909 31.8791 44.4197L27.516 40.049L39.3135 28.2408L43.6766 32.6115C44.3467 33.2831 45.1424 33.8159 46.0182 34.1794C46.8939 34.5429 47.8326 34.73 48.7805 34.73C49.7284 34.73 50.6671 34.5429 51.5428 34.1794C52.4186 33.8159 53.2143 33.2831 53.8844 32.6115C54.5551 31.9403 55.0871 31.1433 55.4501 30.266C55.8132 29.3887 56 28.4483 56 27.4986C56 26.5489 55.8132 25.6086 55.4501 24.7313C55.0871 23.854 54.5551 23.0569 53.8844 22.3858H53.8744ZM29.9955 49.5336C29.9964 49.9572 29.9134 50.3767 29.7514 50.768C29.5894 51.1592 29.3516 51.5145 29.0517 51.8131C28.4388 52.4004 27.6234 52.7282 26.7752 52.7282C25.927 52.7282 25.1116 52.4004 24.4987 51.8131L12.9432 40.2373C12.3394 39.6324 12.0002 38.8121 12.0002 37.9567C12.0002 37.1014 12.3394 36.2811 12.9432 35.6762C13.5469 35.0714 14.3658 34.7316 15.2197 34.7316C16.0735 34.7316 16.8924 35.0714 17.4962 35.6762L29.0517 47.2521C29.3518 47.5509 29.5898 47.9065 29.7518 48.2981C29.9138 48.6897 29.9966 49.1096 29.9955 49.5336ZM51.047 29.7791C50.4341 30.3665 49.6187 30.6943 48.7705 30.6943C47.9223 30.6943 47.1069 30.3665 46.494 29.7791L34.9385 18.2033C34.6395 17.9038 34.4024 17.5483 34.2406 17.157C34.0788 16.7657 33.9955 16.3463 33.9955 15.9228C33.9955 15.0674 34.3347 14.2471 34.9385 13.6423C35.5422 13.0375 36.3611 12.6977 37.215 12.6977C38.0688 12.6977 38.8877 13.0375 39.4915 13.6423L51.047 25.2181C51.3462 25.5175 51.5836 25.8729 51.7456 26.2643C51.9075 26.6556 51.9909 27.075 51.9909 27.4986C51.9909 27.9222 51.9075 28.3417 51.7456 28.733C51.5836 29.1243 51.3462 29.4798 51.047 29.7791Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>Gym</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.5105 37.3163C32.1255 36.9733 31.5148 37.0608 31.2523 37.5053C29.7719 40.0095 30.1113 43.5969 28.7849 43.5969C28.1567 43.5969 28.2547 42.5119 27.9589 41.84C27.7489 41.3657 27.112 41.2922 26.7847 41.6965C25.5318 43.2434 24.3278 45.9716 25.4373 48.6351C26.6237 51.4858 29.3029 53.4983 32.3863 53.318C36.0751 53.101 38.9992 50.0421 38.9992 46.3006C38.9992 42.6047 34.9009 39.4495 32.5105 37.3163ZM34.0259 50.6021C32.941 51.8673 30.9951 51.8673 29.9119 50.6021C28.9739 49.5083 29.1559 47.8371 30.1743 46.8186L31.3678 45.6251C31.7003 45.2927 32.2375 45.2927 32.57 45.6251L33.7634 46.8186C34.7819 47.8371 34.9639 49.5101 34.0259 50.6021ZM51.2487 49.8286V20.4956L52.7222 17.5661L52.8569 17.2039C53.2121 15.7829 52.8989 14.3024 51.9959 13.1474C51.0947 11.9925 49.735 11.3292 48.2703 11.3292H15.7287C14.264 11.3292 12.9043 11.9925 12.0031 13.1474C11.1019 14.3024 10.7869 15.7811 11.1439 17.2039L12.7503 20.4676V49.8286C11.7844 49.8286 11.0004 50.6126 11.0004 51.5785C11.0004 52.5445 11.7844 53.3285 12.7503 53.3285H21.5C22.4659 53.3285 23.2499 52.5445 23.2499 51.5785V36.5288C23.2499 34.3483 24.6008 32.3761 26.615 31.6236C30.3108 30.2377 33.6882 30.2377 37.384 31.6236C39.3965 32.3779 40.7492 34.3483 40.7492 36.5288V51.5785C40.7492 52.5445 41.5331 53.3285 42.4991 53.3285H51.2487C52.2147 53.3285 52.9986 52.5445 52.9986 51.5785C52.9986 50.6126 52.2147 49.8286 51.2487 49.8286ZM14.761 15.3017C14.8992 15.1249 15.2072 14.8292 15.7287 14.8292H48.2703C48.7918 14.8292 49.0998 15.1249 49.2381 15.3017C49.3605 15.4609 49.5443 15.7759 49.49 16.2029L48.4208 18.3291H15.58L14.5107 16.2029C14.4565 15.7741 14.6402 15.4609 14.7627 15.3017H14.761ZM38.6125 28.3459C34.1274 26.666 29.8716 26.666 25.3848 28.3459C22.0144 29.6094 19.7483 32.8976 19.7483 36.5288V49.8286H16.2484V21.829H47.7471V49.8286H44.2473V36.5288C44.2473 32.8976 41.9829 29.6094 38.6107 28.3459H38.6125Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>Fireplace</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.8402 37.8465H41.1598V43.3456H44.8237V17.6832C44.8237 15.6705 46.4615 14.0245 48.473 14.0171L50.3544 14.0098L50.3379 10.3438L48.4583 10.3511C44.4335 10.3676 41.1616 13.6579 41.1616 17.6832V23.1823H22.8402V17.6832C22.8402 15.6705 24.478 14.0245 26.4895 14.0171L28.3709 14.0098L28.3544 10.3438L26.4748 10.3511C22.45 10.3676 19.1781 13.6579 19.1781 17.6832V43.3456H22.842L22.8402 37.8465ZM41.1598 26.8483V34.1804H22.8402V26.8483H41.1598ZM54 51.8362C52.6077 53.4291 50.5999 54.3438 48.4876 54.3438C46.3003 54.3438 44.3364 53.3796 42.9918 51.8563C41.6471 53.3814 39.6832 54.3438 37.4959 54.3438C35.3085 54.3438 33.3447 53.3796 32 51.8563C30.6553 53.3814 28.6915 54.3438 26.5041 54.3438C24.3168 54.3438 22.3529 53.3796 21.0082 51.8563C19.6636 53.3814 17.6997 54.3438 15.5124 54.3438C13.4019 54.3438 11.3923 53.4291 10 51.8362L12.7589 49.4239C13.4551 50.2213 14.459 50.6777 15.5124 50.6777C17.533 50.6777 19.1763 49.0335 19.1763 47.0116H22.8402C22.8402 49.0335 24.4835 50.6777 26.5041 50.6777C28.5248 50.6777 30.168 49.0335 30.168 47.0116H33.832C33.832 49.0335 35.4752 50.6777 37.4959 50.6777C39.5165 50.6777 41.1598 49.0335 41.1598 47.0116H44.8237C44.8237 49.0335 46.467 50.6777 48.4876 50.6777C49.541 50.6777 50.5449 50.2194 51.2411 49.4239L54 51.8362Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>Swimming</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.25 11.6709H40.75C39.7822 11.6709 39 12.4531 39 13.4209C39 14.3886 39.7822 15.1709 40.75 15.1709H44.25C47.1445 15.1709 49.5 17.5264 49.5 20.4209V33.9431C48.9715 34.2511 48.3713 34.4209 47.75 34.4209C46.1942 34.4209 44.6122 33.3954 44.1485 32.0881C43.9017 31.3881 43.2402 30.9209 42.5 30.9209C41.7598 30.9209 41.0965 31.3881 40.8515 32.0881C40.3878 33.3954 38.8057 34.4209 37.25 34.4209C35.6943 34.4209 34.1122 33.3954 33.6502 32.0881C33.4035 31.3899 32.742 30.9209 32 30.9209C31.258 30.9209 30.5965 31.3899 30.3498 32.0881C29.8878 33.3954 28.3075 34.4209 26.75 34.4209C25.1925 34.4209 23.6122 33.3954 23.1502 32.0881C22.9035 31.3899 22.242 30.9209 21.5 30.9209C20.758 30.9209 20.0965 31.3899 19.8498 32.0881C19.3878 33.3954 17.8075 34.4209 16.25 34.4209C15.6287 34.4209 15.0285 34.2511 14.5 33.9431V20.4209C14.5 17.5264 16.8555 15.1709 19.75 15.1709H23.25C24.216 15.1709 25 14.3886 25 13.4209C25 12.4531 24.216 11.6709 23.25 11.6709H19.75C14.9253 11.6709 11 15.5961 11 20.4209V44.9209C11 49.7456 14.9253 53.6709 19.75 53.6709H44.25C49.0747 53.6709 53 49.7456 53 44.9209V20.4209C53 15.5961 49.0747 11.6709 44.25 11.6709ZM44.25 50.1709H19.75C16.8555 50.1709 14.5 47.8154 14.5 44.9209V37.6706C15.0687 37.8176 15.6515 37.9209 16.25 37.9209C18.2222 37.9209 20.1385 37.0949 21.5 35.7771C22.8615 37.0949 24.7778 37.9209 26.75 37.9209C28.7222 37.9209 30.6385 37.0949 32 35.7771C33.3615 37.0949 35.276 37.9209 37.25 37.9209C39.224 37.9209 41.1385 37.0949 42.5 35.7754C43.8615 37.0949 45.776 37.9209 47.75 37.9209C48.3485 37.9209 48.9313 37.8176 49.5 37.6706V44.9209C49.5 47.8154 47.1445 50.1709 44.25 50.1709ZM32 27.4209C33.6362 27.4209 35.1728 26.7839 36.3313 25.6271C38.7183 23.2401 38.7183 19.3534 36.3995 17.0381L34.058 14.4149C33.0132 13.2389 30.9868 13.2406 29.942 14.4149L27.667 16.9681C25.28 19.3551 25.28 23.2419 27.667 25.6289C28.8237 26.7856 30.362 27.4226 31.9982 27.4226L32 27.4209Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>Water Supply</div>
              </div>
              <div className="flex flex-col items-center p-[23px] border rounded-lg bg-[#0874de]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 50 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.798584"
                    width="50"
                    height="50"
                    rx="25"
                    fill="white"
                  />
                  <rect
                    x="0.657895"
                    y="1.45648"
                    width="48.6842"
                    height="48.6842"
                    rx="24.3421"
                    stroke="black"
                    stroke-opacity="0.05"
                    stroke-width="1.31579"
                  />
                  <path
                    d="M29.1169 24.8116L23.8235 19.5182L25.2191 18.1226L32.8949 25.7984L25.2191 33.4742L23.8235 32.0786L29.1169 26.7853H17.1055V24.8116H29.1169Z"
                    fill="#0874DE"
                  />
                </svg>

                <div>40+ Amenities</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button
                variant="default"
                className="bg-[#0874de] text-white rounded-[50px]"
              >
                Request tour&nbsp;
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1287 8.99992L8.1057 4.97692L9.16635 3.91626L15 9.74992L9.16635 15.5835L8.1057 14.5229L12.1287 10.4999H3V8.99992H12.1287Z"
                    fill="white"
                  />
                </svg>
              </Button>
              <Button
                variant="default"
                className="bg-black text-white rounded-[50px]"
              >
                Contact agent&nbsp;
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1287 8.99992L8.1057 4.97692L9.16635 3.91626L15 9.74992L9.16635 15.5835L8.1057 14.5229L12.1287 10.4999H3V8.99992H12.1287Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
            {/* large screens */}
            <div className="bg-prop-ai bg-no-repeat bg-cover py-6 rounded-[16px]">
              <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    PropAI Price Estimator
                  </h2>
                  <p className="mt-2 text-muted-foreground md:text-md">
                    Get your personalized price estimate for this property.
                  </p>
                  <div className="mt-2">
                    <span className="block text-5xl font-bold text-[#0874de]">
                      $725,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 p-4">
          <section>
            <h2 className="text-[25px] font-bold mb-4">Nearby Sales</h2>
            <div className="overflow-x-auto p-[32px] border-1 rounded-[16px]">
              <table className="min-w-full bg-white rounded-[6px]">
                <thead className="">
                  <tr className="bg-[#f5f5f5]">
                    <th className="px-4 py-2 text-left">Address</th>
                    <th className="px-4 py-2 text-left">Distance</th>
                    <th className="px-4 py-2 text-left">Property Type</th>
                    <th className="px-4 py-2 text-left">Sold Price</th>
                    <th className="px-4 py-2 text-left">Sold Date</th>
                    <th className="px-4 py-2 text-left">Bed</th>
                    <th className="px-4 py-2 text-left">Bath</th>
                    <th className="px-4 py-2 text-left">Sqft</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      address: "1017 Ashby Ter NW, Atlanta, GA",
                      distance: "0.14",
                      type: "Single-Family Home",
                      price: "$390,000",
                      date: "03/15/24",
                      bed: "02",
                      bath: "02",
                      sqft: "1,512",
                    },
                    {
                      address: "1017 Ashby Ter NW, Atlanta, GA",
                      distance: "0.21",
                      type: "Single-Family Home",
                      price: "$390,000",
                      date: "02/26/24",
                      bed: "05",
                      bath: "01",
                      sqft: "1,286",
                    },
                    {
                      address: "933 Ashby Cir NW, Atlanta, GA",
                      distance: "0.14",
                      type: "Single-Family Home",
                      price: "$390,000",
                      date: "03/15/24",
                      bed: "02",
                      bath: "02",
                      sqft: "1,512",
                    },
                    {
                      address: "1017 Ashby Ter NW, Atlanta, GA",
                      distance: "0.21",
                      type: "Single-Family Home",
                      price: "$390,000",
                      date: "02/26/24",
                      bed: "05",
                      bath: "01",
                      sqft: "1,286",
                    },
                    {
                      address: "933 Ashby Cir NW, Atlanta, GA",
                      distance: "0.14",
                      type: "Single-Family Home",
                      price: "$390,000",
                      date: "03/15/24",
                      bed: "02",
                      bath: "02",
                      sqft: "1,512",
                    },
                    {
                      address: "1017 Ashby Ter NW, Atlanta, GA",
                      distance: "0.21",
                      type: "Single-Family Home",
                      price: "$390,000",
                      date: "02/26/24",
                      bed: "05",
                      bath: "01",
                      sqft: "1,286",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2 flex gap-2">
                        <svg
                          width="12"
                          height="17"
                          className="mt-1"
                          viewBox="0 0 12 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.25 15.625C3.625 13.5938 0 8.75 0 6C0 2.6875 2.65625 0 6 0C9.3125 0 12 2.6875 12 6C12 8.75 8.34375 13.5938 6.71875 15.625C6.34375 16.0938 5.625 16.0938 5.25 15.625ZM6 8C7.09375 8 8 7.125 8 6C8 4.90625 7.09375 4 6 4C4.875 4 4 4.90625 4 6C4 7.125 4.875 8 6 8Z"
                            fill="#469D62"
                          />
                        </svg>
                        {item.address}
                      </td>
                      <td className="px-4 py-2">{item.distance}</td>
                      <td className="px-4 py-2">{item.type}</td>
                      <td className="px-4 py-2 text-green-500">{item.price}</td>
                      <td className="px-4 py-2">{item.date}</td>
                      <td className="px-4 py-2">{item.bed}</td>
                      <td className="px-4 py-2">{item.bath}</td>
                      <td className="px-4 py-2">{item.sqft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 h-full gap-8">
            <div>
              <h2 className="text-[25px] font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col gap-2"
                >
                  <AccordionItem
                    value="item-1"
                    className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
                  >
                    <AccordionTrigger className=" tracking-wide font-semibold p-4 rounded-2xl">
                      Why should I get a home report?
                    </AccordionTrigger>
                    <AccordionContent className="p-4 tracking-wide text-gray-500">
                      A PropFax report provides detailed information about the
                      property history, helping you make informed decisions
                      before buying or selling.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
                  >
                    <AccordionTrigger className=" tracking-wide font-semibold p-4 rounded-2xl">
                      Why should I get a home report?
                    </AccordionTrigger>
                    <AccordionContent className="p-4 tracking-wide text-gray-500">
                      A PropFax report provides detailed information about the
                      property history, helping you make informed decisions
                      before buying or selling.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
                  >
                    <AccordionTrigger className=" tracking-wide font-semibold p-4 rounded-2xl">
                      Why should I get a home report?
                    </AccordionTrigger>
                    <AccordionContent className="p-4 tracking-wide text-gray-500">
                      A PropFax report provides detailed information about the
                      property history, helping you make informed decisions
                      before buying or selling.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
                  >
                    <AccordionTrigger className=" tracking-wide font-semibold p-4 rounded-2xl">
                      Why should I get a home report?
                    </AccordionTrigger>
                    <AccordionContent className="p-4 tracking-wide text-gray-500">
                      A PropFax report provides detailed information about the
                      property history, helping you make informed decisions
                      before buying or selling.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className={`border border-gray-200 px-6 py-2 rounded-2xl data-[state=open]:bg-gray-100`}
                  >
                    <AccordionTrigger className=" tracking-wide font-semibold p-4 rounded-2xl">
                      Why should I get a home report?
                    </AccordionTrigger>
                    <AccordionContent className="p-4 tracking-wide text-gray-500">
                      A PropFax report provides detailed information about the
                      property history, helping you make informed decisions
                      before buying or selling.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div>
              <h2 className="text-[25px] font-bold mb-4">Environmental Risk</h2>
              <div className="space-y-4 bg-[#f5f5f5] p-[26px] rounded-[16px]">
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1440_361)">
                      <path
                        d="M6.75941 27.6359C6.75141 27.6532 6.75941 27.6185 6.75941 27.6359V27.6359Z"
                        fill="#0874DE"
                      />
                      <path
                        d="M29.7764 28.7783C29.4267 29.0595 29.0171 29.2566 28.5792 29.3547C28.1414 29.4527 27.6868 29.4489 27.2506 29.3437C26.8144 29.2385 26.4082 29.0346 26.0631 28.7477C25.7181 28.4609 25.4435 28.0986 25.2604 27.689C25.1661 27.4306 24.9946 27.2075 24.7692 27.0498C24.5438 26.8922 24.2754 26.8076 24.0004 26.8076C23.7253 26.8076 23.4569 26.8922 23.2316 27.0498C23.0062 27.2075 22.8347 27.4306 22.7404 27.689C22.4931 28.206 22.1046 28.6424 21.6197 28.948C21.1349 29.2535 20.5735 29.4157 20.0004 29.4157C19.4273 29.4157 18.8659 29.2535 18.3811 28.948C17.8962 28.6424 17.5077 28.206 17.2604 27.689C17.1661 27.4306 16.9946 27.2075 16.7692 27.0498C16.5438 26.8922 16.2754 26.8076 16.0004 26.8076C15.7253 26.8076 15.4569 26.8922 15.2316 27.0498C15.0062 27.2075 14.8347 27.4306 14.7404 27.689C14.492 28.2112 14.0994 28.6515 13.6089 28.9579C13.1184 29.2644 12.5506 29.4241 11.9723 29.4184C11.394 29.4126 10.8294 29.2416 10.3451 28.9255C9.86083 28.6094 9.47706 28.1614 9.23906 27.6343C9.13478 27.3921 8.96182 27.1858 8.74157 27.0408C8.52131 26.8959 8.26341 26.8186 7.99972 26.8186C7.73604 26.8186 7.47814 26.8959 7.25788 27.0408C7.03762 27.1858 6.86467 27.3921 6.76039 27.6343C6.5817 28.0497 6.3097 28.4182 5.96551 28.7114C5.62131 29.0047 5.21418 29.2146 4.77571 29.325C4.33723 29.4354 3.87922 29.4433 3.43722 29.348C2.99522 29.2527 2.58112 29.0569 2.22706 28.7756C2.09661 28.6585 1.94437 28.5682 1.77902 28.5099C1.61368 28.4516 1.43847 28.4264 1.2634 28.4358C1.08833 28.4453 0.916832 28.4891 0.75869 28.5647C0.600547 28.6404 0.458862 28.7465 0.341723 28.877C0.224584 29.0074 0.134285 29.1597 0.0759823 29.325C0.0176796 29.4904 -0.00748537 29.6656 0.00192431 29.8406C0.011334 30.0157 0.055134 30.1872 0.130824 30.3453C0.206513 30.5035 0.31261 30.6452 0.443056 30.7623C1.50684 31.6739 2.87452 32.1521 4.27455 32.1019C5.67457 32.0518 7.00455 31.477 8.00039 30.4916C9.07667 31.523 10.5097 32.0988 12.0004 32.0988C13.4911 32.0988 14.9241 31.523 16.0004 30.4916C17.0767 31.523 18.5097 32.0988 20.0004 32.0988C21.4911 32.0988 22.9241 31.523 24.0004 30.4916C24.9966 31.4767 26.3269 32.051 27.727 32.1004C29.1271 32.1498 30.4946 31.6707 31.5577 30.7583C31.8004 30.5171 31.9411 30.1919 31.9506 29.8498C31.9602 29.5078 31.8379 29.1752 31.609 28.9209C31.3802 28.6665 31.0623 28.5098 30.7212 28.4833C30.3801 28.4568 30.0418 28.5624 29.7764 28.7783Z"
                        fill="#0874DE"
                      />
                      <path
                        d="M2.66668 22.7917V15.017C2.66676 14.6634 2.80728 14.3243 3.05735 14.0743L13.1707 3.96366C13.9223 3.21556 14.9396 2.79558 16 2.79558C17.0605 2.79558 18.0778 3.21556 18.8293 3.96366L28.9427 14.0783C29.1894 14.3267 29.3295 14.6616 29.3333 15.0117V22.7917C29.3333 23.1453 29.4738 23.4844 29.7239 23.7345C29.9739 23.9845 30.3131 24.125 30.6667 24.125C31.0203 24.125 31.3594 23.9845 31.6095 23.7345C31.8595 23.4844 32 23.1453 32 22.7917V15.017C32.0015 14.4915 31.8987 13.971 31.6975 13.4855C31.4963 13.0001 31.2008 12.5594 30.828 12.189L20.7147 2.07432C19.463 0.826308 17.7676 0.125488 16 0.125488C14.2325 0.125488 12.537 0.826308 11.2853 2.07432L1.17202 12.189C0.79925 12.5594 0.503709 13.0001 0.302526 13.4855C0.101343 13.971 -0.00148053 14.4915 1.6106e-05 15.017V22.7917C1.6106e-05 23.1453 0.140492 23.4844 0.39054 23.7345C0.640589 23.9845 0.979727 24.125 1.33335 24.125C1.68697 24.125 2.02611 23.9845 2.27616 23.7345C2.52621 23.4844 2.66668 23.1453 2.66668 22.7917Z"
                        fill="#0874DE"
                      />
                      <path
                        d="M15.9996 17.4995C14.5383 17.5001 13.1177 17.9807 11.9563 18.8675C10.7949 19.7542 9.95704 20.998 9.57157 22.4075C9.51448 22.6069 9.5042 22.8167 9.54154 23.0207C9.57889 23.2247 9.66284 23.4173 9.78686 23.5836C9.91087 23.7498 10.0716 23.8851 10.2565 23.979C10.4414 24.0729 10.6455 24.1228 10.8529 24.1248C11.1556 24.1167 11.4471 24.0091 11.6826 23.8187C11.918 23.6284 12.0842 23.3658 12.1556 23.0715C12.3956 22.2374 12.9004 21.504 13.5938 20.982C14.2872 20.46 15.1316 20.1777 15.9996 20.1777C16.8675 20.1777 17.7119 20.46 18.4053 20.982C19.0987 21.504 19.6035 22.2374 19.8436 23.0715C19.9149 23.3658 20.0811 23.6284 20.3166 23.8187C20.552 24.0091 20.8436 24.1167 21.1462 24.1248C21.3536 24.1228 21.5577 24.0729 21.7426 23.979C21.9275 23.8851 22.0883 23.7498 22.2123 23.5836C22.3363 23.4173 22.4202 23.2247 22.4576 23.0207C22.4949 22.8167 22.4847 22.6069 22.4276 22.4075C22.0421 20.998 21.2042 19.7542 20.0428 18.8675C18.8814 17.9807 17.4608 17.5001 15.9996 17.4995Z"
                        fill="#0874DE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1440_361">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.125)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="ml-4">
                    <h3 className="font-semibold">Flood Factor</h3>
                    <p className="text-sm text-gray-500">
                      This property&apos;s flood risk is not changing.
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">Minimal</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1440_384)">
                      <path
                        d="M15.9993 32.3752C8.64735 32.3752 2.66602 26.3938 2.66602 19.0418C2.66602 14.5645 4.67268 11.7632 7.68602 8.93517L10.95 5.86983L9.89402 10.2205C9.52735 11.7352 9.43135 16.3618 11.3767 18.8352C12.1913 19.8712 13.2673 20.3752 14.666 20.3752C16.142 20.3752 17.314 19.1965 17.3327 17.6912C17.3513 16.2018 16.722 14.9685 16.0553 13.6645C15.3727 12.3285 14.666 10.9485 14.666 9.27117C14.666 5.6565 16.5487 2.3805 16.6287 2.24317L17.7327 0.347168L18.9073 2.20183C20.0393 3.98717 21.566 5.65117 23.0447 7.2605C26.1367 10.6258 29.334 14.1085 29.334 19.0432C29.334 26.3952 23.3527 32.3765 16.0007 32.3765L15.9993 32.3752ZM5.33268 19.0418C5.33268 24.9232 10.118 29.7085 15.9993 29.7085C21.8807 29.7085 26.666 24.9232 26.666 19.0418C26.666 15.1458 23.9527 12.1898 21.0793 9.06317C20.0527 7.9445 19.002 6.80184 18.0447 5.58184C17.6767 6.6125 17.3327 7.9325 17.3327 9.27384C17.3327 10.3085 17.8407 11.3018 18.4287 12.4538C19.178 13.9178 20.026 15.5765 19.9993 17.7272C19.9634 20.6578 17.57 23.0432 14.666 23.0432C12.4593 23.0432 10.5967 22.1578 9.27935 20.4845C7.75135 18.5418 7.18735 15.8485 7.06068 13.5698C5.94468 15.1258 5.33268 16.8032 5.33268 19.0418Z"
                        fill="#0874DE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1440_384">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="ml-4">
                    <h3 className="font-semibold">Fire Factor</h3>
                    <p className="text-sm text-gray-500">
                      This property&apos;s flood risk is not changing.
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">Minimal</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1440_396)">
                      <path
                        d="M25.3333 0.625H6.66667C2.99067 0.625 0 3.61567 0 7.29167V8.625C0 12.301 2.99067 15.2917 6.66667 15.2917H25.3333C29.0093 15.2917 32 12.301 32 8.625V7.29167C32 3.61567 29.0093 0.625 25.3333 0.625ZM29.3333 8.625C29.3333 10.8303 27.5387 12.625 25.3333 12.625H6.66667C4.46133 12.625 2.66667 10.8303 2.66667 8.625V7.29167C2.66667 5.08633 4.46133 3.29167 6.66667 3.29167H25.3333C27.5387 3.29167 29.3333 5.08633 29.3333 7.29167V8.625ZM26.6667 8.625C26.6667 9.361 26.0707 9.95833 25.3333 9.95833H6.66667C5.92933 9.95833 5.33333 9.361 5.33333 8.625C5.33333 7.889 5.92933 7.29167 6.66667 7.29167H25.3333C26.0707 7.29167 26.6667 7.889 26.6667 8.625ZM17.3333 19.2917V31.2917C17.3333 32.0277 16.7373 32.625 16 32.625C15.2627 32.625 14.6667 32.0277 14.6667 31.2917V19.2917C14.6667 18.5557 15.2627 17.9583 16 17.9583C16.7373 17.9583 17.3333 18.5557 17.3333 19.2917ZM12 19.2917V27.2917C12 30.233 9.608 32.625 6.66667 32.625C3.72533 32.625 1.33333 30.233 1.33333 27.2917C1.33333 24.973 2.828 22.7623 4.88933 22.0343C5.584 21.789 6.34533 22.1543 6.59067 22.8477C6.836 23.5423 6.47067 24.3037 5.77733 24.549C4.78133 24.901 4 26.105 4 27.2917C4 28.7623 5.196 29.9583 6.66667 29.9583C8.13733 29.9583 9.33333 28.7623 9.33333 27.2917V19.2917C9.33333 18.5557 9.92933 17.9583 10.6667 17.9583C11.404 17.9583 12 18.5557 12 19.2917ZM30.6667 27.2917C30.6667 30.233 28.2747 32.625 25.3333 32.625C22.392 32.625 20 30.233 20 27.2917V19.2917C20 18.5557 20.596 17.9583 21.3333 17.9583C22.0707 17.9583 22.6667 18.5557 22.6667 19.2917V27.2917C22.6667 28.7623 23.8627 29.9583 25.3333 29.9583C26.804 29.9583 28 28.7623 28 27.2917C28 26.105 27.2187 24.901 26.2227 24.549C25.528 24.3037 25.164 23.5423 25.4093 22.8477C25.656 22.153 26.416 21.789 27.1107 22.0343C29.172 22.7623 30.6667 24.973 30.6667 27.2917Z"
                        fill="#0874DE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1440_396">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="ml-4">
                    <h3 className="font-semibold">Heat Factor</h3>
                    <p className="text-sm text-gray-500">
                      This property&apos;s flood risk is not changing.
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">Minimal</span>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1440_398)">
                      <path
                        d="M0 16.875C0 16.5214 0.140476 16.1823 0.390524 15.9322C0.640573 15.6822 0.979711 15.5417 1.33333 15.5417H9.33333C9.68696 15.5417 10.0261 15.6822 10.2761 15.9322C10.5262 16.1823 10.6667 16.5214 10.6667 16.875C10.6667 17.2287 10.5262 17.5678 10.2761 17.8179C10.0261 18.0679 9.68696 18.2084 9.33333 18.2084H1.33333C0.979711 18.2084 0.640573 18.0679 0.390524 17.8179C0.140476 17.5678 0 17.2287 0 16.875ZM27.848 15.6844C28.5126 14.8539 28.9684 13.8762 29.1772 12.8332C29.386 11.7902 29.3417 10.7124 29.048 9.69004C28.7543 8.66772 28.2197 7.73072 27.4892 6.9576C26.7586 6.18448 25.8534 5.59779 24.8493 5.24672C23.8452 4.89564 22.7716 4.79042 21.7185 4.93987C20.6654 5.08932 19.6634 5.48909 18.7967 6.10566C17.9299 6.72223 17.2236 7.53762 16.737 8.48347C16.2504 9.42931 15.9977 10.478 16 11.5417C16 11.8953 16.1405 12.2345 16.3905 12.4845C16.6406 12.7346 16.9797 12.875 17.3333 12.875C17.687 12.875 18.0261 12.7346 18.2761 12.4845C18.5262 12.2345 18.6667 11.8953 18.6667 11.5417C18.6667 10.7506 18.9013 9.97723 19.3408 9.31943C19.7803 8.66164 20.405 8.14895 21.1359 7.8462C21.8668 7.54345 22.6711 7.46423 23.447 7.61857C24.223 7.77291 24.9357 8.15388 25.4951 8.71329C26.0545 9.2727 26.4355 9.98543 26.5898 10.7614C26.7442 11.5373 26.6649 12.3415 26.3622 13.0724C26.0594 13.8034 25.5467 14.4281 24.8889 14.8676C24.2312 15.3071 23.4578 15.5417 22.6667 15.5417H14.6667C14.313 15.5417 13.9739 15.6822 13.7239 15.9322C13.4738 16.1823 13.3333 16.5214 13.3333 16.875C13.3333 17.2287 13.4738 17.5678 13.7239 17.8179C13.9739 18.0679 14.313 18.2084 14.6667 18.2084H26.6667C27.3739 18.2084 28.0522 18.4893 28.5523 18.9894C29.0524 19.4895 29.3333 20.1678 29.3333 20.875C29.3213 23.991 24.9587 24.4057 23.924 21.7644C23.8062 21.4309 23.5608 21.1579 23.2418 21.0054C22.9227 20.8528 22.5561 20.8333 22.2227 20.951C21.8892 21.0688 21.6162 21.3142 21.4636 21.6333C21.3111 21.9523 21.2916 22.3189 21.4093 22.6524C23.4867 28.095 31.936 26.9804 32 20.875C31.9977 19.6676 31.5857 18.4967 30.8315 17.5538C30.0773 16.6109 29.0254 15.9518 27.848 15.6844ZM14.6667 22.2084H1.33333C0.979711 22.2084 0.640573 22.3489 0.390524 22.5989C0.140476 22.849 0 23.1881 0 23.5417C0 23.8953 0.140476 24.2345 0.390524 24.4845C0.640573 24.7346 0.979711 24.875 1.33333 24.875H14.6667C15.3739 24.875 16.0522 25.156 16.5523 25.6561C17.0524 26.1562 17.3333 26.8345 17.3333 27.5417C17.3213 30.6577 12.9587 31.0724 11.924 28.431C11.8657 28.2659 11.7754 28.1139 11.6584 27.9837C11.5413 27.8535 11.3998 27.7476 11.2418 27.672C11.0838 27.5965 10.9125 27.5528 10.7376 27.5435C10.5628 27.5342 10.3878 27.5594 10.2227 27.6177C10.0576 27.676 9.90554 27.7663 9.7753 27.8833C9.64507 28.0004 9.53917 28.142 9.46364 28.2999C9.38812 28.4579 9.34445 28.6292 9.33513 28.8041C9.32581 28.979 9.35103 29.1539 9.40933 29.319C11.4867 34.7617 19.936 33.647 20 27.5417C20 26.1272 19.4381 24.7707 18.4379 23.7705C17.4377 22.7703 16.0812 22.2084 14.6667 22.2084ZM1.33333 11.5417H9.33333C10.7478 11.5417 12.1044 10.9798 13.1046 9.97962C14.1048 8.97942 14.6667 7.62287 14.6667 6.20838C14.6027 0.100381 6.15067 -1.01029 4.076 4.43105C3.95824 4.76451 3.97778 5.1311 4.13031 5.45016C4.28284 5.76922 4.55587 6.01463 4.88933 6.13238C5.2228 6.25014 5.58939 6.2306 5.90845 6.07807C6.22751 5.92554 6.47291 5.65251 6.59067 5.31905C7.62667 2.67638 11.988 3.09238 12 6.20838C12 6.91563 11.719 7.5939 11.219 8.094C10.7189 8.5941 10.0406 8.87505 9.33333 8.87505H1.33333C0.979711 8.87505 0.640573 9.01552 0.390524 9.26557C0.140476 9.51562 0 9.85476 0 10.2084C0 10.562 0.140476 10.9011 0.390524 11.1512C0.640573 11.4012 0.979711 11.5417 1.33333 11.5417Z"
                        fill="#0874DE"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1440_398">
                        <rect
                          width="32"
                          height="32"
                          fill="white"
                          transform="translate(0 0.875)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="ml-4">
                    <h3 className="font-semibold">Wind Factor</h3>
                    <p className="text-sm text-gray-500">
                      This property&apos;s flood risk is not changing.
                    </p>
                  </div>
                  <span className="ml-auto text-sm text-gray-500">Minimal</span>
                </div>
              </div>
            </div>
          </section>
          <section className=" w-full py-10">
            <div className="flex justify-between items-center lg:flex-row flex-col gap-y-5">
              <div className="text-2xl sm:text-3xl md:text-[50px] font-normal flex">
                <span>Suggested&nbsp;</span>
                <span
                  className="font-bold flex flex-col"
                  style={{
                    borderBottom: "6px solid rgba(8, 116, 222, 0.5)",
                  }}
                >
                  Properties
                </span>
              </div>

              <div>
                <Button className="bg-[#0874DE] text-[16px] rounded-3xl">
                  View More&nbsp;&nbsp;
                  <FaAlignRight />
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center mt-10">
              <NewProp />
              <NewProp />
              <NewProp />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}