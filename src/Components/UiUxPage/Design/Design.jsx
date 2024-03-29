import React from "react";

const Design = () => {
  return (
    <>
      <div className="w-full px-20 py-20 bg-gradient-to-r from-zinc-950 to-zinc-950">
        <div className="w-[562px] ">
          <span className="text-neutral-400 text-[40px] font-semibold urbanist">
            Why you should choose
            <br />
          </span>
          <span className="text-cyan-400 text-[56px] design-gradient font-bold urbanist">
            VadaVision for Design
          </span>
        </div>
        <div className="mt-16 justify-start items-center gap-10 inline-flex">
          <div className="flex-col p-4 justify-start border-style-milestone items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clipPath="url(#clip0_2040_34387)">
                  <path
                    d="M17.6797 33.3035L14.026 39.3442C13.4793 40.251 12.1324 40.2109 11.6391 39.2642L9.89221 35.9038L6.10519 35.8905C5.03842 35.8905 4.38495 34.7304 4.93172 33.8103L8.10541 28.5831C8.66544 30.2899 10.2656 31.4366 12.0524 31.4366H14.6128C14.9194 31.4366 15.2261 31.5433 15.4928 31.7301L17.5464 33.2235C17.5864 33.2502 17.6264 33.2902 17.6797 33.3035ZM35.0682 33.8103L31.8946 28.5831C31.3345 30.2899 29.7343 31.4367 27.9475 31.4367H25.3872C25.0672 31.4367 24.7739 31.5434 24.5071 31.7301L22.4536 33.2235C22.4136 33.2502 22.3736 33.2902 22.3202 33.3036L25.9739 39.3442C26.5341 40.251 27.8675 40.2109 28.3609 39.2642L30.1078 35.9038L33.8948 35.8905C34.9615 35.8905 35.615 34.7304 35.0682 33.8103ZM26.214 14.0082L22.7202 13.5281C22.4936 13.5015 22.3069 13.3547 22.2135 13.1547L20.6667 9.98107C20.5467 9.71436 20.2933 9.55435 20 9.55435C19.7067 9.55435 19.4533 9.71436 19.3332 9.98108L17.7865 13.1548C17.6931 13.3547 17.5064 13.5015 17.2797 13.5281L13.786 14.0082C13.4926 14.0482 13.266 14.2349 13.1726 14.5149C13.0793 14.7949 13.1593 15.0883 13.3727 15.2883L15.9196 17.7286C16.0796 17.8886 16.1462 18.1152 16.1063 18.3286L15.4928 21.809C15.4395 22.0891 15.5462 22.369 15.7862 22.5424C16.0263 22.7157 16.3196 22.7291 16.573 22.5958L19.68 20.9289C19.8799 20.8222 20.12 20.8222 20.32 20.9289L23.427 22.5958C23.6804 22.7291 23.9871 22.7158 24.2137 22.5424C24.4538 22.369 24.5605 22.0891 24.5205 21.809L23.8937 18.3286C23.8538 18.1152 23.9204 17.8886 24.0804 17.7286L26.6273 15.2883C26.8407 15.0883 26.9207 14.7949 26.8274 14.5149C26.734 14.2349 26.5074 14.0482 26.214 14.0082ZM31.6546 16.3418C31.6546 22.7691 26.4273 27.9963 20 27.9963C13.5726 27.9963 8.34542 22.7691 8.34542 16.3418C8.34542 9.91441 13.5726 4.68713 20 4.68713C26.4273 4.68713 31.6546 9.91441 31.6546 16.3418ZM28.0942 14.1015C27.8408 13.3415 27.2008 12.7947 26.4007 12.688L23.2537 12.2613L21.8669 9.39434C21.5202 8.67429 20.8 8.22087 20 8.22087C19.1999 8.22087 18.4798 8.67429 18.1331 9.39434L16.7463 12.2613L13.5993 12.688C12.8125 12.7947 12.1591 13.3414 11.9058 14.1015C11.6524 14.8749 11.8658 15.6883 12.4392 16.2484L14.7327 18.4486L14.1727 21.569C14.026 22.3557 14.3461 23.1425 14.9995 23.6225C15.3595 23.8892 15.7862 24.0225 16.2129 24.0225C16.5596 24.0225 16.893 23.9425 17.1997 23.7692L20 22.2757L22.8003 23.7692C23.507 24.1559 24.3471 24.0893 25.0005 23.6225C25.6539 23.1425 25.9739 22.3557 25.8273 21.569L25.2672 18.4486L27.5608 16.2484C28.1342 15.6883 28.3476 14.8749 28.0942 14.1015ZM35.5483 19.6354C35.9217 20.8089 35.5083 22.0891 34.5216 22.8091L32.4547 24.3026C31.9746 24.6626 31.6146 25.156 31.4279 25.7294L30.6411 28.143C30.2544 29.3165 29.1743 30.1032 27.9475 30.1032H25.3872C24.8005 30.1032 24.2137 30.2899 23.7337 30.6499L21.6668 32.1434C20.6667 32.8635 19.3332 32.8635 18.3331 32.1434L16.2663 30.6499C15.7862 30.2899 15.1995 30.1032 14.5994 30.1032H12.0524C10.8257 30.1032 9.74556 29.3165 9.35889 28.143L8.5721 25.7294C8.38539 25.156 8.02541 24.6626 7.5453 24.3026L5.47843 22.8091C4.49167 22.089 4.0783 20.8089 4.45171 19.6354L5.23842 17.2218C5.42512 16.6484 5.42512 16.035 5.23842 15.4616L4.45171 13.0347C4.0783 11.8746 4.49167 10.5945 5.47843 9.87437L7.5453 8.36754C8.02541 8.02082 8.38539 7.52744 8.5721 6.95406L9.35889 4.52712C9.74557 3.367 10.8257 2.58029 12.0524 2.58029H14.5994C15.1995 2.58029 15.7862 2.38024 16.2663 2.03352L18.3331 0.540038C19.3332 -0.180013 20.6667 -0.180013 21.6668 0.540038L23.7337 2.03352C24.2137 2.38024 24.8005 2.58029 25.3872 2.58029H27.9475C29.1743 2.58029 30.2544 3.367 30.6411 4.52712L31.4279 6.95406C31.6146 7.52744 31.9746 8.02082 32.4547 8.36754L34.5216 9.87437C35.5083 10.5945 35.9217 11.8746 35.5483 13.0347L34.7616 15.4616C34.5749 16.035 34.5749 16.6484 34.7616 17.2218L35.5483 19.6354ZM32.988 16.3418C32.988 9.18102 27.1607 3.35366 20 3.35366C12.8392 3.35366 7.01195 9.18102 7.01195 16.3418C7.01195 23.5025 12.8392 29.3298 20 29.3298C27.1607 29.3298 32.988 23.5025 32.988 16.3418Z"
                    fill="#DD4243"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2040_34387">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="self-stretch text-white text-xl font-semibold urbanist">
                Top-notch quality
              </div>
              <div className="w-[380px] h-20 text-neutral-400 text-base font-medium urbanist">
                Be it small or large, our utmost priority is designing it the
                best and top notch
              </div>
            </div>
          </div>
          <div className="flex-col p-4 justify-start items-start border-style-milestone gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clipPath="url(#clip0_2049_548)">
                  <path
                    d="M3.56273 14.1445C3.56273 13.4973 3.03805 12.9727 2.39086 12.9727H1.17188C0.524687 12.9727 0 13.4973 0 14.1445C0 14.7917 0.524687 15.3164 1.17188 15.3164H2.39086C3.03805 15.3164 3.56273 14.7917 3.56273 14.1445Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M4.17345 4.73757C5.22814 4.73757 5.75361 3.43671 4.97291 2.70867L4.08142 1.87726C3.60806 1.43593 2.8665 1.46187 2.42517 1.93507C1.98377 2.40843 2.0097 3.14992 2.48298 3.59132C3.2033 4.17929 3.45837 4.73757 4.17345 4.73757Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M3.37451 23.7025L2.48302 24.5338C2.00966 24.9752 1.9838 25.7168 2.42513 26.1901C2.8667 26.6635 3.6081 26.6893 4.08146 26.248L4.97295 25.4166C5.4463 24.9752 5.47216 24.2337 5.03084 23.7604C4.58935 23.287 3.84787 23.2611 3.37451 23.7025Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M38.8281 12.8086H37.6091C36.9619 12.8086 36.4373 13.3333 36.4373 13.9805C36.4373 14.6277 36.9619 15.1523 37.6091 15.1523H38.8281C39.4753 15.1523 40 14.6277 40 13.9805C40 13.3333 39.4753 12.8086 38.8281 12.8086Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M36.6255 23.7024C36.1522 23.2612 35.4107 23.287 34.9692 23.7603C34.5279 24.2337 34.5537 24.9752 35.0271 25.4166L35.9186 26.2479C36.393 26.6902 37.1344 26.6623 37.5749 26.19C38.0162 25.7166 37.9904 24.9752 37.517 24.5337L36.6255 23.7024Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M36.6255 4.42274L37.517 3.59141C37.9904 3.15001 38.0162 2.40844 37.5748 1.93516C37.1334 1.46188 36.3918 1.43587 35.9186 1.87735L35.0271 2.70868C34.5537 3.15009 34.5279 3.89165 34.9693 4.36493C35.4108 4.83829 36.1523 4.86407 36.6255 4.42274Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M13.3594 31.7578C13.3594 33.2155 14.252 34.4683 15.5191 35H24.4809C25.748 34.4683 26.6406 33.2155 26.6406 31.7578V30.0781H13.3594V31.7578Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M15.7031 38.8281C15.7031 39.475 16.2281 40 16.875 40H23.125C23.7719 40 24.2969 39.475 24.2969 38.8281V37.3438H15.7031V38.8281Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M33.5584 14.0625C36.8929 10.6587 34.9663 4.91772 30.3001 4.17452C29.1287 0.279911 24.422 -1.2704 21.1719 1.17475V28.1641H24.6875C27.3327 28.1641 29.5898 26.4266 30.3117 23.9486C34.9525 23.2001 36.8991 17.4727 33.5584 14.0625ZM23.5156 7.10936C23.5156 6.46218 24.0403 5.93749 24.6875 5.93749C25.3347 5.93749 25.8594 6.46218 25.8594 7.10936C25.8594 8.30944 26.3143 8.52929 27.2205 8.96718C28.0785 9.38171 29.375 10.0081 29.375 11.7969C29.375 12.4441 28.8503 12.9687 28.2031 12.9687C27.5559 12.9687 27.0312 12.4441 27.0312 11.7969C27.0312 11.5398 27.0313 11.4787 26.2009 11.0775C25.1966 10.5923 23.5156 9.78007 23.5156 7.10936ZM30.4665 18.1653C29.1173 20.0348 27.0332 20.8106 26.4398 20.8106C25.9298 20.8106 25.4608 20.4753 25.3136 19.9607C25.1356 19.3384 25.4959 18.6898 26.1181 18.5118C27.0869 18.2348 27.9625 17.6299 28.5659 16.7937C28.9447 16.2689 29.6772 16.1505 30.202 16.5292C30.7268 16.908 30.8452 17.6405 30.4665 18.1653Z"
                    fill="#DD4243"
                  />
                  <path
                    d="M18.8281 28.1641V1.17475C15.5782 -1.27032 10.8714 0.279754 9.70001 4.17452C5.03118 4.91819 3.1086 10.6601 6.44165 14.0625C3.09977 17.4738 5.04977 23.2004 9.68837 23.9486C10.4127 26.4348 12.6744 28.1641 15.3126 28.1641H18.8281ZM12.7795 8.96718C13.6857 8.52929 14.1406 8.30952 14.1406 7.10936C14.1406 6.46218 14.6653 5.93749 15.3125 5.93749C15.9597 5.93749 16.4844 6.46218 16.4844 7.10936C16.4844 9.78007 14.8034 10.5923 13.7991 11.0775C12.9688 11.4787 12.9688 11.5398 12.9688 11.7969C12.9688 12.4441 12.4441 12.9687 11.7969 12.9687C11.1497 12.9687 10.625 12.4441 10.625 11.7969C10.625 10.0081 11.9215 9.38171 12.7795 8.96718ZM14.6864 19.9607C14.5393 20.4752 14.0702 20.8106 13.5602 20.8106C12.9488 20.8106 11.0009 20.0409 9.7036 18.391C9.30352 17.8822 9.39173 17.1455 9.90048 16.7455C10.4094 16.3454 11.146 16.4336 11.546 16.9423C12.1297 17.6847 12.952 18.2458 13.8819 18.5117C14.5042 18.6898 14.8644 19.3384 14.6864 19.9607Z"
                    fill="#DD4243"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2049_548">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="self-stretch text-white text-xl font-semibold urbanist">
                Creative thinking
              </div>
              <div className="w-[380px] h-20 text-neutral-400 text-base font-medium urbanist">
                Our design team comprises of creative thinkers, who loves to
                solve problem with creativity - always
              </div>
            </div>
          </div>
          <div className="flex-col p-4 justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M6.52306 11.9542C5.96245 11.6304 5.2459 11.8226 4.92242 12.3829C4.59862 12.9435 4.79089 13.6601 5.35119 13.9836C5.91149 14.3074 6.62835 14.1151 6.95183 13.5548C7.27562 12.9942 7.08336 12.2776 6.52306 11.9542Z"
                  fill="#DD4243"
                />
                <path
                  d="M36.406 9.45361H35.2341V8.28174C35.2341 7.63415 34.7101 7.10986 34.0623 7.10986C33.4147 7.10986 32.8904 7.63415 32.8904 8.28174V9.45361H31.7185C31.0709 9.45361 30.5466 9.9779 30.5466 10.6255C30.5466 11.2734 31.0709 11.7974 31.7185 11.7974H32.8904V12.9692C32.8904 13.6168 33.4147 14.1411 34.0623 14.1411C34.7101 14.1411 35.2341 13.6168 35.2341 12.9692V11.7974H36.406C37.0536 11.7974 37.5779 11.2734 37.5779 10.6255C37.5779 9.9779 37.0536 9.45361 36.406 9.45361Z"
                  fill="#DD4243"
                />
                <path
                  d="M4.76562 5.85986C4.76562 6.50775 5.28961 7.03173 5.9375 7.03173C6.58508 7.03173 7.10937 6.50775 7.10937 5.85986V4.68798H8.28124C8.92883 4.68798 9.45312 4.164 9.45312 3.51611C9.45312 2.86853 8.92883 2.34424 8.28124 2.34424H7.10937V1.17236C7.10937 0.52478 6.58508 0.000488281 5.9375 0.000488281C5.28961 0.000488281 4.76562 0.52478 4.76562 1.17236V2.34424H3.59375C2.94617 2.34424 2.42188 2.86853 2.42188 3.51611C2.42188 4.164 2.94617 4.68798 3.59375 4.68798H4.76562V5.85986Z"
                  fill="#DD4243"
                />
                <path
                  d="M12.1676 2.1908C13.283 4.42224 13.9025 6.88562 14.0585 9.37524H25.9414C26.097 6.88593 26.7165 4.42224 27.8319 2.1908L28.0791 1.69642C28.3047 1.24567 28.2165 0.700934 27.8594 0.343878C27.5036 -0.0131769 26.9588 -0.101373 26.5069 0.124152L22.5747 2.09009L20.8282 0.343878C20.3704 -0.113885 19.6288 -0.113885 19.1711 0.343878L17.4248 2.09009L13.4927 0.123847C13.0395 -0.101373 12.4984 -0.0143976 12.1401 0.343878C11.7831 0.700629 11.6949 1.24537 11.9204 1.69642L12.1676 2.1908Z"
                  fill="#DD4243"
                />
                <path
                  d="M27.1747 11.7974H12.8247L8.2492 17.3351C6.00281 20.0554 4.76562 23.5768 4.76562 27.1098C4.76562 34.9407 10.7452 40.0002 19.9997 40.0002C29.2544 40.0002 35.234 34.9407 35.234 27.1098C35.234 23.5768 33.9969 20.1335 31.7492 17.4132L27.1747 11.7974ZM19.9872 23.9375C21.9259 23.9375 23.5028 25.5144 23.5028 27.4532C23.5028 28.9742 22.5262 30.2599 21.1716 30.7488V31.7973C21.1716 32.4449 20.6476 32.9692 19.9997 32.9692C19.3521 32.9692 18.8281 32.4449 18.8281 31.7973V30.7567C17.4603 30.2748 16.4715 28.9833 16.4715 27.4532C16.4715 26.8053 16.9958 26.2813 17.6434 26.2813C18.2913 26.2813 18.8153 26.8053 18.8153 27.4532C18.8153 28.0998 19.3408 28.625 19.9872 28.625C20.6338 28.625 21.159 28.0998 21.159 27.4532C21.159 26.8065 20.6338 26.2813 19.9872 26.2813C18.0487 26.2813 16.4715 24.7042 16.4715 22.7657C16.4715 21.2352 17.4603 19.944 18.8281 19.4622V17.7349C18.8281 17.0873 19.3521 16.563 19.9997 16.563C20.6476 16.563 21.1716 17.0873 21.1716 17.7349V19.4701C22.5262 19.959 23.5028 21.2447 23.5028 22.7657C23.5028 23.4136 22.9788 23.9375 22.3309 23.9375C21.6833 23.9375 21.159 23.4136 21.159 22.7657C21.159 22.1193 20.6338 21.5938 19.9872 21.5938C19.3408 21.5938 18.8153 22.1193 18.8153 22.7657C18.8153 23.4123 19.3405 23.9375 19.9872 23.9375Z"
                  fill="#DD4243"
                />
              </svg>
              <div className="self-stretch text-white text-xl font-semibold urbanist">
                Value for money
              </div>
              <div className="w-[380px] h-20 text-neutral-400 text-base font-medium urbanist">
                You’ll always find our work worthy of every amount you’ve
                invested
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-8 justify-start items-center gap-10 inline-flex">
          <div className="flex-col  p-4 justify-start border-style-milestone items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M28.7216 25.5467C28.4446 23.6642 27.502 21.9434 26.0648 20.6964C24.6276 19.4494 22.791 18.7588 20.8883 18.75H19.1149C17.2122 18.7588 15.3757 19.4494 13.9385 20.6964C12.5013 21.9434 11.5587 23.6642 11.2816 25.5467L10.4316 31.49C10.4045 31.6821 10.4224 31.8779 10.484 32.0619C10.5456 32.2459 10.6492 32.413 10.7866 32.55C11.1199 32.8833 13.1649 34.5833 20.0033 34.5833C26.8416 34.5833 28.8816 32.89 29.2199 32.55C29.3573 32.413 29.4609 32.2459 29.5225 32.0619C29.5842 31.8779 29.6021 31.6821 29.5749 31.49L28.7216 25.5467Z"
                  fill="#DD4243"
                />
                <path
                  d="M12.6 19.6669C10.9892 21.1518 9.94112 23.1478 9.63329 25.3169L9.01662 29.5835C4.06662 29.5502 2.56662 27.7502 2.31662 27.3835C2.21999 27.2503 2.15103 27.0991 2.11381 26.9388C2.0766 26.7785 2.07189 26.6124 2.09996 26.4502L2.46662 24.3835C2.65766 23.3035 3.10633 22.2854 3.77458 21.4156C4.44283 20.5458 5.31097 19.85 6.30537 19.3871C7.29978 18.9243 8.39113 18.708 9.4869 18.7567C10.5827 18.8054 11.6505 19.1176 12.6 19.6669Z"
                  fill="#DD4243"
                />
                <path
                  d="M37.9 26.4502C37.9281 26.6124 37.9234 26.7785 37.8862 26.9388C37.849 27.0991 37.78 27.2503 37.6834 27.3835C37.4334 27.7502 35.9334 29.5502 30.9834 29.5835L30.3667 25.3169C30.0589 23.1478 29.0108 21.1518 27.4 19.6669C28.3494 19.1176 29.4173 18.8054 30.5131 18.7567C31.6089 18.708 32.7002 18.9243 33.6946 19.3871C34.689 19.85 35.5571 20.5458 36.2254 21.4156C36.8937 22.2854 37.3423 23.3035 37.5334 24.3835L37.9 26.4502Z"
                  fill="#DD4243"
                />
                <path
                  d="M12.8834 16C12.4638 16.595 11.9069 17.0799 11.2598 17.4136C10.6128 17.7473 9.89473 17.9199 9.16671 17.9167C8.44047 17.9167 7.72463 17.7441 7.07817 17.4132C6.43172 17.0822 5.87315 16.6024 5.44851 16.0133C5.02388 15.4241 4.74532 14.7425 4.63579 14.0245C4.52627 13.3066 4.58892 12.5729 4.81858 11.884C5.04823 11.195 5.43832 10.5705 5.9567 10.0618C6.47508 9.55319 7.1069 9.17502 7.80011 8.95848C8.49331 8.74194 9.22805 8.69323 9.94377 8.81635C10.6595 8.93948 11.3357 9.23092 11.9167 9.66667C11.7496 10.3202 11.6656 10.9921 11.6667 11.6667C11.668 13.1952 12.0888 14.6941 12.8834 16Z"
                  fill="#DD4243"
                />
                <path
                  d="M35.4167 13.3333C35.4171 13.9354 35.2989 14.5315 35.0687 15.0878C34.8385 15.6441 34.5009 16.1495 34.0752 16.5752C33.6496 17.0009 33.1441 17.3385 32.5878 17.5687C32.0316 17.7989 31.4354 17.9171 30.8334 17.9167C30.1053 17.9199 29.3873 17.7473 28.7402 17.4136C28.0932 17.0799 27.5362 16.595 27.1167 16C27.9112 14.6942 28.3321 13.1952 28.3334 11.6667C28.3345 10.9921 28.2505 10.3202 28.0834 9.66667C28.7643 9.15596 29.574 8.84496 30.4218 8.76852C31.2695 8.69208 32.1218 8.85322 32.8831 9.23388C33.6444 9.61454 34.2847 10.1997 34.7322 10.9237C35.1797 11.6478 35.4167 12.4822 35.4167 13.3333Z"
                  fill="#DD4243"
                />
                <path
                  d="M20 17.9165C23.4518 17.9165 26.25 15.1183 26.25 11.6665C26.25 8.21472 23.4518 5.4165 20 5.4165C16.5482 5.4165 13.75 8.21472 13.75 11.6665C13.75 15.1183 16.5482 17.9165 20 17.9165Z"
                  fill="#DD4243"
                />
              </svg>
              <div className="self-stretch text-white text-xl font-semibold urbanist">
                Experienced design team
              </div>
              <div className="w-[380px] h-20 text-neutral-400 text-base font-medium urbanist">
                High-end work from a dedicated team of senior designers thats
                always available when you need it.
              </div>
            </div>
          </div>
          <div className="flex-col p-4 justify-start border-style-milestone items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M18.5454 35.2122H17.6363V33.4546H10.4848V35.2122H9.51512C9.21209 35.2122 8.90906 35.5152 8.90906 35.8182C8.90906 36.1819 9.21209 36.4243 9.51512 36.4243H10.4848V37.0303C10.4848 38.3637 11.5757 39.394 12.8485 39.394H15.2121C16.5454 39.394 17.5757 38.3031 17.5757 37.0303V36.4243H18.4848C18.8485 36.4243 19.0909 36.1819 19.0909 35.8182C19.1515 35.5152 18.9091 35.2122 18.5454 35.2122Z"
                  fill="#DD4243"
                />
                <path
                  d="M21.5758 15.1518L16.3637 13.6366C13.8788 15.879 9.69699 13.5154 10.7273 10.0608C11.2121 8.6063 12.5455 7.576 14.0606 7.576C15.3334 7.576 16.4849 8.24267 17.0909 9.39418C17.2121 9.63661 17.3334 9.87903 17.394 10.1215L22.4849 11.6366C23.7576 10.4245 25.0909 10.7881 25.4546 10.7275C25.1515 6.00024 20.9091 1.27297 15.394 0.666908C12.0606 0.303272 8.8485 1.33358 6.42426 3.51539C4.00002 5.69721 2.60608 8.84873 2.60608 12.0608C2.60608 15.7578 4.42426 19.273 7.39396 21.3942C8.36366 22.1215 9.21214 23.8184 9.63638 25.4548H13.5152V17.4548H12.3637C12.0606 17.4548 11.7576 17.2124 11.7576 16.8487C11.7576 16.5457 12.0606 16.2427 12.3637 16.2427H15.8788C16.1818 16.2427 16.4849 16.5457 16.4849 16.8487C16.4849 17.2124 16.1818 17.4548 15.8788 17.4548H14.7273V25.5154H18.6061C19.0303 23.879 19.8788 22.1215 20.9091 21.3942C22.3031 20.3639 23.4546 19.0912 24.2424 17.576C22.9697 17.3336 21.9394 16.3639 21.5758 15.1518Z"
                  fill="#DD4243"
                />
                <path
                  d="M36.7879 12.5455C35.8788 11.6364 34.4849 11.6364 33.5758 12.5455C33.2728 12.8485 33.091 13.2122 32.9697 13.5758H26.9697C26.9091 13.394 26.8485 13.2122 26.7273 13.0304L30.4243 8.18188C31.9394 8.90915 33.697 7.81824 33.697 6.18188C33.697 4.90915 32.6667 3.93945 31.4546 3.93945C30.1819 3.93945 29.2122 4.96976 29.2122 6.18188C29.2122 6.60612 29.3334 7.03036 29.5758 7.394L25.8788 12.2425C25.5758 12.0607 25.2122 12.0001 24.8485 11.9395C24 11.9395 23.2728 12.3637 22.9091 13.0304L16.3031 11.0304C16.3031 10.6667 16.2425 10.2425 16.0607 9.93945C15.091 8.18188 12.4849 8.4243 11.9394 10.3637C11.2122 12.8485 14.6061 14.4243 16 12.2425L22.6667 14.2425C22.7273 15.8788 24.4243 16.9698 25.9394 16.2425L29.6364 21.0304C29.4546 21.3334 29.3334 21.7576 29.3334 22.1213C29.3334 25.091 33.8182 25.091 33.8182 22.1213C33.8182 20.9091 32.7879 19.8788 31.5758 19.8788C31.2122 19.8788 30.7879 20.0001 30.4849 20.1819L26.8485 15.394C26.9697 15.2122 27.0304 15.0304 27.091 14.7879H33.091C33.2122 15.1516 33.394 15.4546 33.6364 15.697C34.4849 16.6061 35.9394 16.6061 36.8485 15.697C37.697 14.8485 37.697 13.4546 36.7879 12.5455Z"
                  fill="#DD4243"
                />
                <path
                  d="M7.45459 31.6367C7.45459 32.0004 7.69701 32.2428 8.06065 32.2428H20.0607C20.4243 32.2428 20.6667 32.0004 20.6667 31.6367V30.1216H7.45459V31.6367Z"
                  fill="#DD4243"
                />
                <path
                  d="M20.0607 26.7275H8.06065C7.69701 26.7275 7.45459 26.97 7.45459 27.3336V28.8488H20.6667V27.3336C20.6667 27.0306 20.3637 26.7275 20.0607 26.7275Z"
                  fill="#DD4243"
                />
              </svg>
              <div className="self-stretch text-white text-xl font-semibold urbanist">
                Extensive research & innovation
              </div>
              <div className="w-[380px] h-20 text-neutral-400 text-base font-medium urbanist">
                We rely on our extensive research findings and proceed with the
                optimised yet innovative designs
              </div>
            </div>
          </div>
          <div className="flex-col p-4 justify-start items-start gap-6 inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M23.7344 9.96826C18.203 9.96826 13.7029 14.4683 13.7029 19.9997C13.7029 25.531 18.203 30.0311 23.7344 30.0311C29.2657 30.0311 33.7658 25.531 33.7658 19.9997C33.7658 14.4683 29.2657 9.96826 23.7344 9.96826ZM28.4647 21.1715H22.5625V12.9457H24.9062V18.8278H28.4647V21.1715Z"
                  fill="#DD4243"
                />
                <path
                  d="M23.7792 3.73444C20.2105 3.72483 16.9091 4.86529 14.223 6.8049H5.35344C3.95508 6.8049 2.82156 7.9385 2.82156 9.33678C2.82156 10.7351 3.95516 11.8687 5.35344 11.8687H9.64445C8.82687 13.2824 8.21664 14.8308 7.85359 16.4721H2.53188C1.13359 16.4722 0 17.6057 0 19.004C0 20.4024 1.13359 21.5359 2.53188 21.5359H7.54156C7.69281 23.1507 8.08016 24.6966 8.66875 26.1394H6.86031C5.46195 26.1394 4.32844 27.273 4.32844 28.6712C4.32844 30.0696 5.46203 31.2031 6.86031 31.2031H11.9427C14.9061 34.3212 19.0931 36.2654 23.7345 36.2654C32.7177 36.2654 40 28.9832 40 20C40 11.013 32.7661 3.75865 23.7792 3.73444ZM23.7345 32.3751C16.9108 32.3751 11.3593 26.8236 11.3593 19.9999C11.3593 13.1762 16.9108 7.62475 23.7345 7.62475C30.5581 7.62475 36.1096 13.1762 36.1096 19.9999C36.1096 26.8236 30.5581 32.3751 23.7345 32.3751Z"
                  fill="#DD4243"
                />
              </svg>
              <div className="self-stretch text-white text-xl font-semibold urbanist">
                Always on time
              </div>
              <div className="w-[380px] h-20 text-neutral-400 text-base font-medium urbanist">
                We mostly deliver the projects before time. So, you can be
                assured your projects will never be delayed
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
