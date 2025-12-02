import svgPaths from "./svg-078b4y18jz";

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

function Text() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[76.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[76.266px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-0 tracking-[-0.1504px] whitespace-pre">Sarah Chen</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[76.609px]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-500 text-nowrap whitespace-pre">ESG Manager</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[36px] items-end relative w-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[21.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[21.359px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#05466c] text-[16px] text-nowrap top-0 tracking-[-0.3125px] whitespace-pre">SC</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f0b82e] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-0 pr-[0.016px] py-0 relative size-[40px]">
        <Text2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[52px] top-0 w-[128.609px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon() {
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

function Text3() {
  return <div className="absolute bg-[#eb121e] left-[24px] rounded-[3.35544e+07px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[36px] top-[2px]" data-name="Button">
      <Icon />
      <Text3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[180.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[180.609px]">
        <Container2 />
        <Button />
      </div>
    </div>
  );
}

export default function Container4() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-px pt-0 px-[24px] relative size-full">
          <Frame />
          <Container3 />
        </div>
      </div>
    </div>
  );
}