import { useGetBannerQuery } from "../../Redux/banner/banner";

export default function Banner() {
  const { data } = useGetBannerQuery();
  const banner = data?.data;

  return (
    <section className="py-5 sm:py-7">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-3xl sm:text-5xl text-primary font-bold">
            {banner?.title}
          </h2>
          <p className="text-lg sm:text-xl font-medium text-neutral">
            {banner?.description}
          </p>
          <div className="w-full h-60 sm:h-[450px]">
            {banner?.videoUrl ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${banner?.videoUrl}?autoplay=0&mute=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="YouTube Video"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ borderRadius: "10px" }}
              ></iframe>
            ) : (
              <div className="h-[370] bg-black">Loading...</div>
            )}
          </div>

          <div className="mt-5">
            <a
              href="#order"
              className="bg-primary text-base-100 px-4 py-2 rounded"
            >
              এখানে অর্ডার করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
