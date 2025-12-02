import svgPaths from "./svg-tcogubvgju";

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Familjen_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[25.6px] text-black text-nowrap whitespace-pre">
        <span className="text-[#efbc02]">Q</span>
        <span className="text-[#01416c]">ode</span>
        <span className="text-[#e92e16]">+</span>
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[89px] items-start left-0 pb-px pt-[24px] px-[24px] top-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[12.5%] right-[58.33%] top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
            <path d={svgPaths.p16a0fc00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_12.5%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
            <path d={svgPaths.p33770900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-[58.33%] right-[12.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-11.11%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
            <path d={svgPaths.p16a0fc00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.67%_58.33%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-20%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
            <path d={svgPaths.p33770900} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[79.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[79.234px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[40px] not-italic text-[16px] text-center text-gray-500 text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[8px] top-0 w-[207px]" data-name="Button">
      <Text />
      <Text1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
            <path d={svgPaths.p3d7c0300} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-10%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
            <path d="M0.833333 9.16667V0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-5.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 6">
            <path d={svgPaths.p3049b800} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-19.42%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p16398ce0} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[65.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[65.281px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[33px] not-italic text-[16px] text-center text-gray-500 text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Products</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[8px] top-[52px] w-[207px]" data-name="Button">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 7">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.92%_-33.38%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 9">
            <path d={svgPaths.p2cf69e00} id="Vector" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] size-[20px] top-[14px]" data-name="Text">
      <Icon2 />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[48px] top-[12px] w-[69.641px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[35px] not-italic text-[#05466c] text-[16px] text-center text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Suppliers</p>
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#05466c] h-[32px] left-0 rounded-br-[4px] rounded-tr-[4px] top-[8px] w-[4px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="absolute bg-blue-50 h-[48px] left-0 rounded-[8px] top-[104px] w-[207px]" data-name="Button">
      <Text4 />
      <Text5 />
      <Container2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
            <path d={svgPaths.p26091d00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p1d33bb00} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_58.33%_62.5%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 2">
            <path d="M2.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_33.33%_45.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
            <path d="M7.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_33.33%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-0.83px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 2">
            <path d="M7.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[50.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[50.781px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[25px] not-italic text-[16px] text-center text-gray-500 text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Ledger</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[8px] top-[156px] w-[207px]" data-name="Button">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p284f7580} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[29.17%] left-3/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 9">
            <path d="M0.833333 7.5V0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_45.83%_29.17%_54.17%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.67%_29.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.833333 3.33333V0.833333" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[56.672px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[28px] not-italic text-[16px] text-center text-gray-500 text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Reports</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[8px] top-[208px] w-[207px]" data-name="Button">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
            <path d={svgPaths.p1f3cfb80} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[20px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[59.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.875px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] not-italic text-[16px] text-center text-gray-500 text-nowrap top-0 tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Settings</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] pr-0 py-0 rounded-[8px] top-[260px] w-[207px]" data-name="Button">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute h-[308px] left-[16px] top-[105px] w-[207px]" data-name="Navigation">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-400">Version 2.4.1</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-400">© 2025 Qode+</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[85px] items-start left-0 pb-0 pt-[25px] px-[24px] top-[847px] w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[1528px] relative shrink-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1528px] relative w-[240px]">
        <Container1 />
        <Navigation />
        <Container6 />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <path d={svgPaths.p24e04a80} id="Icon" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-neutral-500 tracking-[-0.1504px] w-[239px]">Search products, suppliers, reports...</p>
      <Search />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-neutral-100 h-[34px] relative rounded-[6px] shrink-0 w-[500px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[34px] items-center overflow-clip px-[8px] py-[2px] relative rounded-[inherit] w-[500px]">
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[76.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[76.266px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Sarah Chen</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[76.609px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">ESG Manager</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-end relative w-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[21.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#05466c] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">SC</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#f0b82e] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[40px]">
        <Text14 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[52px] top-0 w-[128.609px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3b7be120} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1f3d9f80} id="Vector_2" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return <div className="absolute bg-[#eb121e] left-[24px] rounded-[3.35544e+07px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button6() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[36px] top-[2px]" data-name="Button">
      <Icon6 />
      <Text15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[40px] relative shrink-0 w-[180.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[180.609px]">
        <Container10 />
        <Button6 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[89px] items-center justify-between pb-px pt-0 px-[24px] relative w-full">
          <Frame />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[633.875px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[633.875px]">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[50.4px] left-0 not-italic text-[36px] text-gray-900 text-nowrap top-0 tracking-[-0.3509px] whitespace-pre">Suppliers</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[633.875px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[633.875px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[16px] text-gray-500 text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">All suppliers contributing to FMCG food, BCRS beverage, and beauty product lifecycles.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[82.391px] relative shrink-0 w-[633.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[82.391px] items-start relative w-[633.875px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[20px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#05466c] h-[44px] relative rounded-[8px] shrink-0 w-[157.016px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[157.016px]">
        <Icon7 />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[91px] not-italic text-[16px] text-center text-nowrap text-white top-[10px] tracking-[-0.3125px] translate-x-[-50%] whitespace-pre">Add Supplier</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[82.391px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Button7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pfb16970} id="Vector" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13754d00} id="Vector_2" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p281e4940} id="Vector_3" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 6H14" id="Vector_4" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 10H14" id="Vector_5" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14H14" id="Vector_6" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 18H14" id="Vector_7" stroke="var(--stroke-0, #05466C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-blue-50 content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[48px] top-[24px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[88px] w-[344.656px]" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-gray-900 tracking-[0.3955px]">10</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[128px] w-[344.656px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Total Suppliers</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-white border border-gray-200 border-solid h-[174px] left-0 rounded-[8px] top-0 w-[394.656px]" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3f3d8e00} id="Vector" stroke="var(--stroke-0, #EB121E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #EB121E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #EB121E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-red-100 content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[48px] top-[24px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[88px] w-[344.672px]" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-gray-900 tracking-[0.3955px]">2</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[128px] w-[344.672px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">High-Risk Suppliers</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white border border-gray-200 border-solid h-[174px] left-[418.66px] rounded-[8px] top-0 w-[394.672px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 8V12" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 16H12.01" id="Vector_3" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-amber-100 content-stretch flex items-center justify-center left-[24px] rounded-[8px] size-[48px] top-[24px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-[24px] top-[88px] w-[344.656px]" data-name="Container">
      <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-gray-900 tracking-[0.3955px]">2</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[128px] w-[344.656px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Missing Certifications</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white border border-gray-200 border-solid h-[174px] left-[837.33px] rounded-[8px] top-0 w-[394.656px]" data-name="Container">
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[174px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container22 />
      <Container26 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center overflow-clip relative rounded-[inherit] w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-gray-400 text-nowrap tracking-[-0.1504px] whitespace-pre">Search supplier name, GLN, or region</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex gap-[8px] h-[38px] items-center left-0 px-[17px] py-px rounded-[8px] top-0 w-[463.188px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon11 />
      <TextInput />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-900 tracking-[-0.1504px]">
      <p className="relative shrink-0 w-full">All Regions</p>
      <p className="relative shrink-0 w-full">Singapore</p>
      <p className="relative shrink-0 w-full">China</p>
      <p className="relative shrink-0 w-full">Thailand</p>
      <p className="relative shrink-0 w-full">Malaysia</p>
      <p className="relative shrink-0 w-full">Vietnam</p>
      <p className="relative shrink-0 w-full">EU</p>
      <p className="relative shrink-0 w-full">Others</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-start left-[12.92px] top-[8.92px] w-[196px]">
      <Frame6 />
      <Icon12 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-gray-50 border-[1.078px] border-gray-200 border-solid h-[37px] left-[479.19px] overflow-clip rounded-[8px] top-0 w-[223.59px]" data-name="Dropdown">
      <Frame3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-900 tracking-[-0.1504px]">
      <p className="relative shrink-0 w-full">All Categories</p>
      <p className="relative shrink-0 w-full">FMCG – Food Products</p>
      <p className="relative shrink-0 w-full">BCRS – Beverage Containers</p>
      <p className="relative shrink-0 w-full">Beauty / Cosmetics</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-start left-[12.92px] top-[8.92px] w-[196px]">
      <Frame7 />
      <Icon13 />
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute bg-gray-50 border-[1.078px] border-gray-200 border-solid h-[37px] left-[718.8px] overflow-clip rounded-[8px] top-0 w-[223.59px]" data-name="Dropdown">
      <Frame4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-900 tracking-[-0.1504px]">
      <p className="relative shrink-0 w-full">All Risk Levels</p>
      <p className="relative shrink-0 w-full">Low</p>
      <p className="relative shrink-0 w-full">Moderate</p>
      <p className="relative shrink-0 w-full">High</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-start left-[12.92px] top-[8.92px] w-[196px]">
      <Frame8 />
      <Icon14 />
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute bg-gray-50 border-[1.078px] border-gray-200 border-solid h-[37px] left-[958.39px] overflow-clip rounded-[8px] top-0 w-[223.59px]" data-name="Dropdown">
      <Frame5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Dropdown />
      <Dropdown1 />
      <Dropdown2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-900 tracking-[-0.1504px]">
      <p className="relative shrink-0 w-full">All Certifications</p>
      <p className="relative shrink-0 w-full">Certified</p>
      <p className="relative shrink-0 w-full">Missing Certification</p>
      <p className="relative shrink-0 w-full">Expired</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[196px]">
      <Frame2 />
      <Icon15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[196px]">
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[196px]">
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex items-start left-[calc(50%+0.21px)] top-[8.92px] translate-x-[-50%] w-[196px]">
      <Frame11 />
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="absolute bg-gray-50 border-[1.078px] border-gray-200 border-solid h-[37px] left-0 overflow-clip rounded-[8px] top-0 w-[223.59px]" data-name="Dropdown">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-900 tracking-[-0.1504px]">
      <p className="relative shrink-0 w-full">All Status</p>
      <p className="relative shrink-0 w-full">Active</p>
      <p className="relative shrink-0 w-full">On Watchlist</p>
      <p className="relative shrink-0 w-full">Suspended</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute content-stretch flex items-start left-[12.92px] top-[8.92px] w-[196px]">
      <Frame13 />
      <Icon16 />
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="absolute bg-gray-50 border-[1.078px] border-gray-200 border-solid h-[37px] left-[239.59px] overflow-clip rounded-[8px] top-0 w-[223.59px]" data-name="Dropdown">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[8px] grow items-start leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-gray-900 tracking-[-0.1504px]">
      <p className="relative shrink-0 w-full">Most recent</p>
      <p className="relative shrink-0 w-full">Highest risk</p>
      <p className="relative shrink-0 w-full">Highest carbon contribution</p>
      <p className="relative shrink-0 w-full">Aplhabetiacl</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex items-start left-[12.92px] top-[8.92px] w-[196px]">
      <Frame15 />
      <Icon17 />
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="absolute bg-gray-50 border-[1.078px] border-gray-200 border-solid h-[37px] left-[479.19px] overflow-clip rounded-[8px] top-0 w-[223.59px]" data-name="Dropdown">
      <Frame16 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[37px] relative shrink-0 w-full" data-name="Container">
      <Dropdown3 />
      <Dropdown4 />
      <Dropdown5 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white h-[141px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[141px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[64.5px] left-0 top-0 w-[265.359px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 text-nowrap top-[24px] tracking-[0.6px] uppercase whitespace-pre">Supplier</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[64.5px] left-[265.36px] top-0 w-[115.063px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 text-nowrap top-[24px] tracking-[0.6px] uppercase whitespace-pre">Region</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[64.5px] left-[380.42px] top-0 w-[139.094px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 text-nowrap top-[24px] tracking-[0.6px] uppercase whitespace-pre">Role</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[64.5px] left-[519.52px] top-0 w-[137.313px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 text-nowrap top-[24px] tracking-[0.6px] uppercase whitespace-pre">Risk Level</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[64.5px] left-[656.83px] top-0 w-[165.922px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 text-nowrap top-[24px] tracking-[0.6px] uppercase whitespace-pre">Certifications</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[64.5px] left-[822.75px] top-0 w-[155.078px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 top-[16px] tracking-[0.6px] uppercase w-[100px]">Carbon Contribution</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[64.5px] left-[977.83px] top-0 w-[132.109px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[12px] text-gray-500 text-nowrap top-[24px] tracking-[0.6px] uppercase whitespace-pre">Status</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[64.5px] left-[1109.94px] top-0 w-[120.063px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[60.13px] not-italic text-[12px] text-center text-gray-500 text-nowrap top-[24px] tracking-[0.6px] translate-x-[-50%] uppercase whitespace-pre">Actions</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[64.5px] left-0 top-0 w-[1230px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-gray-50 border-[0px_0px_1px] border-gray-200 border-solid h-[64.5px] left-0 top-0 w-[1230px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">GreenFields Organic Co.</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[94.938px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567890</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#05466c] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">FMCG</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[14.5px] w-[217.359px]" data-name="Container">
      <Text16 />
      <Container32 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container33 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[55.125px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Thailand</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[73px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[89.688px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Raw Materials</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[73px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text20 />
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-white border border-[#05466c] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[21.5px] w-[52.594px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#05466c] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Low</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[73px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text21 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[75.469px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">ISO 14001</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-[26px] w-[62.281px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Organic</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[12.5px] w-[117.922px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[73px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[22.375px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">8%</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[73px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text24 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[24px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[73px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text25 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[20.5px] w-[72.063px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[73px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[73px] left-0 top-0 w-[1230px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">EcoCycle Solutions</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[92.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[92.953px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567891</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="bg-[#f0b82e] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[10px] text-nowrap whitespace-pre">BCRS</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text27 />
        <Text28 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[14.5px] w-[217.359px]" data-name="Container">
      <Text26 />
      <Container36 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container37 />
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[65.406px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Singapore</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[73px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[55.609px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Recycler</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[73px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text30 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute bg-white border border-[#05466c] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[21.5px] w-[52.594px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#05466c] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Low</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[73px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text31 />
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[75.469px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">ISO 14001</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-[26px] w-[47.844px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">LEED</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[12.5px] w-[117.922px]" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[73px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[22.047px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#05466c] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">5%</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[73px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text34 />
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[24px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[73px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text35 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[20.5px] w-[72.063px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[73px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container39 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[73px] left-0 top-[73px] w-[1230px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Natural Beauty Labs</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[94.625px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567892</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="bg-red-100 h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#eb121e] text-[10px] text-nowrap whitespace-pre">Beauty / Cosmetics</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text37 />
        <Text38 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[76px] items-start left-[24px] top-[12.5px] w-[217.359px]" data-name="Container">
      <Text36 />
      <Container40 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[101px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container41 />
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[41px] left-[24px] top-[30.5px] w-[37.938px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-0.36px] not-italic text-[14px] text-gray-900 top-[-1.39px] tracking-[-0.1504px] w-[59px]">South Korea</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[101px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text39 />
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[86.969px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Manufacturer</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[101px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute bg-[#fef9e7] border border-[#f0b82e] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[35.5px] w-[89.313px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-amber-800 text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Moderate</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[101px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text41 />
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[70.891px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">COSMOS</p>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-[26px] w-[45.078px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">GMP</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[26.5px] w-[117.922px]" data-name="Container">
      <Text42 />
      <Text43 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[101px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container42 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[30.297px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#05466c] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">22%</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[101px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[38px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[101px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text45 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[34.5px] w-[72.063px]" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[101px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container43 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[101px] left-0 top-[146px] w-[1230px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">PureDrink Bottling Inc.</p>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[94.906px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567893</p>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="bg-[#f0b82e] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[10px] text-nowrap whitespace-pre">BCRS</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text47 />
        <Text48 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[14.5px] w-[217.359px]" data-name="Container">
      <Text46 />
      <Container44 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[73px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container45 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[55.672px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Malaysia</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[73px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[41px] left-[24px] top-[16.5px] w-[71.313px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-[-1px] tracking-[-0.1504px] w-[72px]">Processing Facility</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[73px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute bg-white border border-[#05466c] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[21.5px] w-[52.594px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#05466c] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Low</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[73px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[59.391px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">HACCP</p>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-[26px] w-[75.469px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">ISO 14001</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[12.5px] w-[117.922px]" data-name="Container">
      <Text52 />
      <Text53 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[73px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container46 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[28.375px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">12%</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[73px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[24px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[73px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text55 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[20.5px] w-[72.063px]" data-name="Container">
      <Button14 />
      <Button15 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[73px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container47 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[73px] left-0 top-[247px] w-[1230px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Global Grain Suppliers</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[95.109px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567894</p>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="bg-[#05466c] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">FMCG</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text57 />
        <Text58 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[12.5px] w-[217.359px]" data-name="Container">
      <Text56 />
      <Container48 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container49 />
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[53px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Vietnam</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[69px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text59 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[89.688px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Raw Materials</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[69px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text60 />
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute bg-red-100 border border-[#eb121e] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[19.5px] w-[56.781px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#eb121e] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">High</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[69px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[24px] top-[28.5px] w-[29.922px]" data-name="Text">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[12px] text-gray-400 text-nowrap whitespace-pre">None</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[69px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Text62 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[28.875px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">19%</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[69px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text63 />
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute bg-[#fef9e7] border border-[#f0b82e] border-solid h-[42px] left-[24px] rounded-[4px] top-[14px] w-[84.109px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[12px] text-amber-800 top-[4px] w-[54px]">On Watchlist</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[69px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text64 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon27 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[18.5px] w-[72.063px]" data-name="Container">
      <Button16 />
      <Button17 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[69px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container50 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[69px] left-0 top-[320px] w-[1230px]" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">LuxCosmetics Manufacturing</p>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[16px] relative shrink-0 w-[94.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[94.797px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567895</p>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="bg-red-100 h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#eb121e] text-[10px] text-nowrap whitespace-pre">Beauty / Cosmetics</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text66 />
        <Text67 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[76px] items-start left-[24px] top-[12.5px] w-[217.359px]" data-name="Container">
      <Text65 />
      <Container51 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[101px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container52 />
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[44.172px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">France</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[101px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text68 />
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[86.969px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Manufacturer</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[101px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text69 />
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute bg-white border border-[#05466c] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[35.5px] w-[52.594px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#05466c] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Low</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[101px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text70 />
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[70.891px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">COSMOS</p>
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-[26px] w-[61.578px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Ecocert</p>
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-[65.58px] px-[9px] py-[3px] rounded-[4px] top-[26px] w-[45.078px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">GMP</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[26.5px] w-[117.922px]" data-name="Container">
      <Text71 />
      <Text72 />
      <Text73 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[101px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container53 />
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[28.609px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">15%</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[101px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[38px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[101px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text75 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon28 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon29 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[34.5px] w-[72.063px]" data-name="Container">
      <Button18 />
      <Button19 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[101px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container54 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[101px] left-0 top-[389px] w-[1230px]" data-name="Table Row">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Asia Pacific Distributors</p>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[95.016px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567896</p>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="bg-[#05466c] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">FMCG</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text77 />
        <Text78 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[12.5px] w-[217.359px]" data-name="Container">
      <Text76 />
      <Container55 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container56 />
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[36.859px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">China</p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[69px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text79 />
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[68.469px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Distributor</p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[69px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text80 />
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute bg-[#fef9e7] border border-[#f0b82e] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[19.5px] w-[89.313px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[14px] text-amber-800 text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Moderate</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[69px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text81 />
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-[24px] px-[9px] py-[3px] rounded-[4px] top-[23.5px] w-[69.828px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">ISO 9001</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[69px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Text82 />
    </div>
  );
}

function Text83() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[26.469px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">11%</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[69px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text83 />
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[22px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[69px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text84 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon30 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon31 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[18.5px] w-[72.063px]" data-name="Container">
      <Button20 />
      <Button21 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[69px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container57 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[69px] left-0 top-[490px] w-[1230px]" data-name="Table Row">
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">BeautyBase Ingredients</p>
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[16px] relative shrink-0 w-[93.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[93.984px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567897</p>
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="bg-red-100 h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#eb121e] text-[10px] text-nowrap whitespace-pre">Beauty / Cosmetics</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text86 />
        <Text87 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[76px] items-start left-[24px] top-[12.5px] w-[217.359px]" data-name="Container">
      <Text85 />
      <Container58 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[101px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container59 />
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[58.281px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Germany</p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[101px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text88 />
    </div>
  );
}

function Text89() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[89.688px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Raw Materials</p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[101px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="absolute bg-red-100 border border-[#eb121e] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[35.5px] w-[56.781px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#eb121e] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">High</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[101px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text90 />
    </div>
  );
}

function Text91() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[24px] top-[44.5px] w-[29.922px]" data-name="Text">
      <p className="font-['Inter:Italic',sans-serif] font-normal italic leading-[16px] relative shrink-0 text-[12px] text-gray-400 text-nowrap whitespace-pre">None</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[101px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Text91 />
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[42.5px] w-[30.859px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">28%</p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[101px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="absolute bg-red-100 box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[38px] w-[83.063px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#eb121e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#eb121e] text-[12px] text-nowrap whitespace-pre">Suspended</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[101px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text93 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[34.5px] w-[72.063px]" data-name="Container">
      <Button22 />
      <Button23 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[101px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container60 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[101px] left-0 top-[559px] w-[1230px]" data-name="Table Row">
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">CleanBottle Recycling</p>
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[95.047px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567898</p>
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="bg-[#f0b82e] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[10px] text-nowrap whitespace-pre">BCRS</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text95 />
        <Text96 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[12.5px] w-[217.359px]" data-name="Container">
      <Text94 />
      <Container61 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container62 />
    </div>
  );
}

function Text97() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[38.953px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Japan</p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[69px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text97 />
    </div>
  );
}

function Text98() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[55.609px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Recycler</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[69px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="absolute bg-white border border-[#05466c] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[19.5px] w-[52.594px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#05466c] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Low</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[69px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text99 />
    </div>
  );
}

function Text100() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[75.469px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">ISO 14001</p>
    </div>
  );
}

function Text101() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-[79.47px] px-[9px] py-[3px] rounded-[4px] top-0 w-[33.094px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">R2</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[22px] left-[24px] top-[23.5px] w-[117.922px]" data-name="Container">
      <Text100 />
      <Text101 />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[69px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container63 />
    </div>
  );
}

function Text102() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[26.5px] w-[22.156px]" data-name="Text">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#05466c] text-[14px] tracking-[-0.1504px]">3%</p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[69px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text102 />
    </div>
  );
}

function Text103() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[22px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[69px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text103 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon34 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon35 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[18.5px] w-[72.063px]" data-name="Container">
      <Button24 />
      <Button25 />
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[69px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container64 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[0px_0px_1px] border-gray-200 border-solid h-[69px] left-0 top-[660px] w-[1230px]" data-name="Table Row">
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
    </div>
  );
}

function Text104() {
  return (
    <div className="h-[20px] relative shrink-0 w-[217.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[217.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Mediterranean Food Co.</p>
      </div>
    </div>
  );
}

function Text105() {
  return (
    <div className="h-[16px] relative shrink-0 w-[95.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[95.016px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">9521234567899</p>
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="bg-[#05466c] h-[20px] relative rounded-[4px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[10px] text-nowrap text-white whitespace-pre">FMCG</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[217.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-full items-center relative w-[217.359px]">
        <Text105 />
        <Text106 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[14.5px] w-[217.359px]" data-name="Container">
      <Text104 />
      <Container65 />
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[72.5px] left-0 top-0 w-[265.359px]" data-name="Table Cell">
      <Container66 />
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[26.953px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap tracking-[-0.1504px] whitespace-pre">Italy</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[72.5px] left-[265.36px] top-0 w-[115.063px]" data-name="Table Cell">
      <Text107 />
    </div>
  );
}

function Text108() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[86.969px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-gray-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Manufacturer</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[72.5px] left-[380.42px] top-0 w-[139.094px]" data-name="Table Cell">
      <Text108 />
    </div>
  );
}

function Text109() {
  return (
    <div className="absolute bg-white border border-[#05466c] border-solid h-[30px] left-[24px] rounded-[3.35544e+07px] top-[21.5px] w-[52.594px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[12px] not-italic text-[#05466c] text-[14px] text-nowrap top-[4px] tracking-[-0.1504px] whitespace-pre">Low</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[72.5px] left-[519.52px] top-0 w-[137.313px]" data-name="Table Cell">
      <Text109 />
    </div>
  );
}

function Text110() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-0 w-[62.281px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Organic</p>
    </div>
  );
}

function Text111() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-[66.28px] px-[9px] py-[3px] rounded-[4px] top-0 w-[46.219px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Halal</p>
    </div>
  );
}

function Text112() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex h-[22px] items-center left-0 px-[9px] py-[3px] rounded-[4px] top-[26px] w-[78.656px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[rgba(5,70,108,0.2)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">ISO 22000</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute h-[48px] left-[24px] top-[12.5px] w-[117.922px]" data-name="Container">
      <Text110 />
      <Text111 />
      <Text112 />
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[72.5px] left-[656.83px] top-0 w-[165.922px]" data-name="Table Cell">
      <Container67 />
    </div>
  );
}

function Text113() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[24px] top-[28.5px] w-[28.953px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#05466c] text-[14px] text-nowrap tracking-[-0.1504px] whitespace-pre">14%</p>
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[72.5px] left-[822.75px] top-0 w-[155.078px]" data-name="Table Cell">
      <Text113 />
    </div>
  );
}

function Text114() {
  return (
    <div className="absolute bg-[#ebf5f0] box-border content-stretch flex h-[26px] items-center left-[24px] px-[9px] py-[5px] rounded-[4px] top-[24px] w-[53.984px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#05466c] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#05466c] text-[12px] text-nowrap whitespace-pre">Active</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[72.5px] left-[977.83px] top-0 w-[132.109px]" data-name="Table Cell">
      <Text114 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[45.83%] right-[45.83%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[16.67%] left-[45.83%] right-[45.83%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p23ccba00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[32px]">
        <Icon37 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-center left-[24px] top-[20.5px] w-[72.063px]" data-name="Container">
      <Button26 />
      <Button27 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[72.5px] left-[1109.94px] top-0 w-[120.063px]" data-name="Table Cell">
      <Container68 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute h-[72.5px] left-0 top-[729px] w-[1230px]" data-name="Table Row">
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[801.5px] left-0 top-[64.5px] w-[1230px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[866px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Text115() {
  return (
    <div className="h-[20px] relative shrink-0 w-[184.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[184.906px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-gray-500 top-0 tracking-[-0.1504px] w-[185px]">Showing 1-10 of 10 suppliers</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="basis-0 grow h-[30px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[41px] not-italic text-[14px] text-center text-gray-500 text-nowrap top-[5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Previous</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[#05466c] h-[28px] relative rounded-[8px] shrink-0 w-[30.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[30.344px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[15.5px] not-italic text-[14px] text-center text-nowrap text-white top-[4px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[30px] relative rounded-[8px] shrink-0 w-[55.953px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[55.953px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[28.5px] not-italic text-[14px] text-center text-gray-500 text-nowrap top-[5px] tracking-[-0.1504px] translate-x-[-50%] whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[30px] relative shrink-0 w-[183.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[30px] items-center relative w-[183.797px]">
        <Button28 />
        <Button29 />
        <Button30 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white h-[63px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[63px] items-center justify-between pb-0 pt-px px-[24px] relative w-full">
          <Text115 />
          <Container69 />
        </div>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white h-[931px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[931px] items-start p-px relative w-full">
          <Table />
          <Container70 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[1464.39px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[1464.39px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
          <Container14 />
          <Container27 />
          <Container31 />
          <Container71 />
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1311px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pl-0 pr-[15px] py-0 relative rounded-[inherit] w-[1311px]">
        <Container72 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="basis-0 grow h-[1528px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[1528px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Container12 />
        <Container73 />
      </div>
    </div>
  );
}

export default function Component30SuppliersDesktop() {
  return (
    <div className="bg-gray-50 content-stretch flex items-start relative size-full" data-name="3.0 Suppliers - Desktop">
      <Container7 />
      <Container74 />
    </div>
  );
}