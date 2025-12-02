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

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}