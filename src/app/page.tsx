import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" alt="imagen foto" width={300} height={300} />

      <h1>Next Image Deberia funcionar</h1>

      <Link href="/login">Login</Link>

    </main>
  );
}
