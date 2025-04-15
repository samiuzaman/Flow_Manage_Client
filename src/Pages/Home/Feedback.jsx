import useReviews from "../../Hook/useReviews";
import Title from "../../Shared/Title";
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
  Rating,
} from "keep-react";

const Feedback = () => {
  const [reviews] = useReviews();
  console.log("Feedback", reviews);
  return (
    <div className="bg-white py-12">
      <Title
        title="Client Experiences"
        subtitle="We value the trust and words of our happy clients"
      ></Title>
      <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto ">
        <Carousel options={{ loop: true }} className="w-full lg:w-5/6 mx-auto">
          <CarouselSlides>
            {reviews?.slice(0, 4)?.map((slide) => (
              <CarouselItem key={slide}>
                <div className="flex flex-col items-center justify-center rounded-xl space-y-4 border border-metal-100 bg-metal-50 py-12 dark:border-metal-900 dark:bg-metal-900">
                  <img
                    className="w-20 h-20 rounded-full border-2 border-error-500"
                    src={slide.profile_image}
                  />
                  <h3 className="text-2xl font-medium text-metal-900 dark:text-white">
                    {slide.name}
                  </h3>

                  <p className="text-metal-700 px-6">{slide.review}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselSlides>
          <CarouselControl>
            <CarouselButtons>
              <CarouselPrevButton />
              <CarouselNextButton />
            </CarouselButtons>
            <CarouselIndicators />
          </CarouselControl>
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;
