import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {

  const { data: session } = useSession();
  return (
    <main>
        {session ? (
          <>
            <h1>{session?.user?.name}</h1>
            <button onClick={() => signOut()}>Sair</button>
          </>
        ) : (
          <button onClick={() => signIn("github")}>Entrar</button>
        )}
    </main>
  )
}
