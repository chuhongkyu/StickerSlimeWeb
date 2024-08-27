// /src/app/userDelete/page.tsx

import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Page() {
    return (
        <section className="h-full">
            <Navigation/>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-black">
                <h1 className="text-3xl font-bold mb-4">Account Data Deletion Request</h1>
                <div className="flex items-end mb-5">
                    <Image
                        className="relative mr-5 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/assets/images/main/main_icon.png"
                        alt="sticker slime app"
                        width={180}
                        height={180}
                        priority
                    />
                <p className="text-lg mb-4">App Name: [Sticker Slime]</p>
                </div>
                
                <h2 className="text-2xl font-semibold mb-2">How to Delete Your Google Play Games Account Data</h2>
                <p className="text-lg mb-4">To delete your Google Play Games account data, please follow these steps:</p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Open the Google Play Games app on your device.</li>
                    <li>Go to the settings menu.</li>
                    <li>Under &quot;Your data&quot;, select &quot;Delete Play Games account & data&quot;.</li>
                    <li>Follow the on-screen instructions to delete your Play Games data.</li>
                </ol>
                
                <h2 className="text-2xl font-semibold mb-2">Data Types Deleted or Retained</h2>
                <p className="text-lg mb-4">Data types that will be deleted: game progress, achievements, leaderboards.</p>
                <p className="text-lg mb-4">Retention period: up to 30 days as required by law.</p>
                
                <h2 className="text-2xl font-semibold mb-2">Contact Support</h2>
                <p className="text-lg mb-4">Developer: [Mr.chu/Book Cat]</p>
                <p className="text-lg">For further inquiries or assistance, please contact us at <a href="mailto:chuhongkyu@gmail.com" className="text-blue-500 underline">chuhongkyu@gmail.com</a>.</p>
            </div>
        </section>
    )
}
