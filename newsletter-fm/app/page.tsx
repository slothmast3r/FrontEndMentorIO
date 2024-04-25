import Image from "next/image";
import SubscribeForm from "./_components/SubscribeForm";

export default function Home() {
  return (
    <main className="font-roboto text-dark-slate-grey flex justify-center items-center h-screen w-scree bg-charcoal-grey">
      <div className=" min-h-[66vh] aspect-video flex rounded-[2rem] py-5 bg-white px-5">
        <section className=" px-16 w-1/2  mr-24 flex h-full flex-col justify-center">
          <h1 className="py-3 font-bold text-[54px]">Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="py-4 mb-6 space-y-2 list-image-checkmark list-inside align-text-top ">
            <LiElement description="Product discovery and building what matters"></LiElement>
            <LiElement description="Measuring to ensure updates are a success"></LiElement>
            <LiElement description="And much more!"></LiElement>
          </ul>
          <SubscribeForm></SubscribeForm>
        </section>
        <div className="w-1/2 bg-center bg-[url('/assets/images/illustration-sign-up-mobile.svg')] bg-cover bg-no-repeat h-full "></div>
      </div>
    </main>
  );
}

function LiElement({ description }: { description: string }) {
  return (
    <li className="flex gap-3">
      <img src="/assets/images/icon-list.svg" alt="checkmark"></img>
      <div>{description}</div>
    </li>
  );
}
