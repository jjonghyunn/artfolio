export default function About() {
  const tools = ["유화", "아크릴", "연필", "크로키", "디지털", "인테리어그림"];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#e8eaf0]">About</h2>
          <p className="text-[#6b7280] leading-relaxed">
            직장인으로 살면서도 그림을 놓지 않습니다. 유화, 드로잉, 크로키를 통해
            일상의 순간들을 캔버스에 담고 있습니다.
          </p>
          <p className="text-[#6b7280] leading-relaxed">
            그림 주문도 받고 있습니다. 인테리어용 그림, 초상화, 선물용 작품 등
            원하는 스타일로 제작해드립니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#6b7280] uppercase tracking-widest">사용 재료 · 기법</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 text-sm rounded-md border border-[#1e2130] bg-[#111318] text-[#e8eaf0]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
