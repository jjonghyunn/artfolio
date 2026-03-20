export default function Commission() {
  return (
    <section id="commission" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        <h2 className="text-3xl font-bold text-[#e8eaf0]">그림 주문</h2>
        <p className="text-[#6b7280] leading-relaxed">
          인테리어용 그림, 초상화, 선물용 작품 등 원하시는 스타일로 제작해드립니다.
          <br />
          Instagram DM 또는 이메일로 문의해주세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <a
            href="https://instagram.com/jjonghyunn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#111318] border border-[#1e2130] text-[#e8eaf0] text-sm font-medium hover:border-[#0ED4A3] hover:text-[#0ED4A3] transition-colors"
          >
            Instagram DM
          </a>
        </div>

        <p className="text-xs text-[#6b7280] mt-4">
          © {new Date().getFullYear()} jjonghyunn. All rights reserved.
        </p>
      </div>
    </section>
  );
}
