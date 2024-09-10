import Image from "next/image";

export default function Page() {
  return (
    <section className="user-delete">
      <div className="container">
        <h1>Account Data Deletion Request</h1>

        <div className="image-section">
          <Image
            src="/assets/images/main/main_icon.png"
            alt="sticker slime app"
            width={180}
            height={180}
            priority
          />
          <p>App Name: [Sticker Slime]</p>
        </div>

        <h2>How to Delete Your Google Play Games Account Data</h2>
        <p>To delete your Google Play Games account data, please follow these steps:</p>
        <ol>
          <li>Open the Google Play Games app on your device.</li>
          <li>Go to the settings menu.</li>
          <li>Under &quot;Your data&quot;, select &quot;Delete Play Games account & data&quot;.</li>
          <li>Follow the on-screen instructions to delete your Play Games data.</li>
        </ol>

        <h2>How to Delete Your Apple Game Center Account Data</h2>
        <p>To delete your Apple Game Center account data, please follow these steps:</p>
        <ol>
          <li>Open the Settings app on your iOS device.</li>
          <li>Scroll down and select &quot;Game Center&quot;.</li>
          <li>Select &quot;Apple ID&quot;, then choose &quot;Sign Out&quot; to remove your Game Center account.</li>
          <li>Contact Apple Support if you wish to request deletion of all associated game data.</li>
        </ol>

        <h2>Data Types Deleted or Retained</h2>
        <p>Data types that will be deleted: game progress, achievements, leaderboards.</p>
        <p>Retention period: up to 30 days as required by law.</p>

        <h2>Contact Support</h2>
        <p>Developer: [Mr.chu/Book Cat]</p>
        <p>For further inquiries or assistance, please contact us at <a href="mailto:chuhongkyu@gmail.com">chuhongkyu@gmail.com</a>.</p>
      </div>
    </section>
  );
}
