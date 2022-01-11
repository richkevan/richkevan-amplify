import { useRouter } from "next/router";

export default function Projects() {
    const router = useRouter();
    return (
        <div>
            <h3>{router.query.title}</h3>
        </div>
    )
}