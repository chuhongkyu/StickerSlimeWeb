export default function Page() {
    return (
        <section className="pt-12 h-full">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-black">
                <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>

                <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                <p className="mb-4">[Mr.chu/Book Cat], the developer of the Cute Slime Game (hereinafter referred to as the &quot;Game&quot;), recognizes the importance of user privacy and aims to explain the types of personal information collected within the game, how it is collected, and the purposes for which it is used through this Privacy Policy. Our game is a cute, non-violent game designed for all ages.</p>

                <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                <p className="mb-4">The Game uses Google AdMob for advertising purposes, and as a result, the following types of personal information may be collected:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Approximate Location Information:</strong> Used for advertising targeting purposes.</li>
                    <li><strong>Device Information and Advertising ID:</strong> Used for advertising targeting and analytics purposes.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">3. How We Collect Information</h2>
                <p className="mb-4">Personal information is collected through the following methods:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Automatically when users play the game and view ads.</li>
                    <li>Through the Google AdMob SDK.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">4. How We Use Information</h2>
                <p className="mb-4">The collected personal information is used for the following purposes:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Ad Serving and Targeting:</strong> To provide personalized ads based on user interests.</li>
                    <li><strong>Analytics and Statistics:</strong> To analyze usage patterns of the game and measure the effectiveness of ads.</li>
                </ul>

                <h2 className="text-xl font-semibold mb-2">5. Sharing and Disclosure of Information</h2>
                <p className="mb-4">We do not sell or rent collected personal information to third parties. However, personal information may be shared for advertising purposes with Google AdMob, which is necessary for ad serving and targeting.</p>

                <h2 className="text-xl font-semibold mb-2">6. In-App Purchases</h2>
                <p className="mb-4">The Game offers in-app purchases to enhance the user experience. When you make in-app purchases, additional information such as payment information may be collected to process these transactions. This information is handled securely and is not shared with third parties except as necessary to process the transaction.</p>
            </div>
        </section>
    );
}
