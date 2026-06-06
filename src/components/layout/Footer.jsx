import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

function Footer() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const teamCollection = collection(db, "team");
        getDocs(teamCollection).then((resp) => {
            setTeam(
                resp.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        email: data.email || "",
                        fullName: data.fullName || "",
                        image: data.image || "",
                        linkedinUrl: data.linkedinUrl || "",
                        rol: data.rol || "",
                    };
                })
            );
        });
    }, []);

    // Render initials for avatar fallback
    const getInitials = (fullName) => {
        if (!fullName) return "";
        const names = fullName.split(" ");
        if (names.length === 1) return names[0][0];
        return (
            (names[0][0] || "") +
            (names[names.length - 1][0] || "")
        ).toUpperCase();
    };

    return (
        <>
            <footer className="bg-primary-100 py-10 flex flex-col items-center justify-center w-full">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
                    {team.map((member) => (
                        <div key={member.id} className="bg-white shadow rounded-md p-4 flex flex-col items-center min-w-[200px]">
                            {member.image ? (
                                <img
                                    src={member.image}
                                    alt={member.fullName}
                                    className="h-16 w-16 rounded-full mb-2 object-cover"
                                />
                            ) : (
                                <div className="h-16 w-16 bg-primary-200 rounded-full mb-2 flex items-center justify-center font-bold text-primary-700 text-xl">
                                    {getInitials(member.fullName)}
                                </div>
                            )}
                            <span className="font-medium text-primary-800">{member.fullName}</span>
                            <span className="text-xs text-primary-600">{member.rol}</span>
                            <a
                                href={`mailto:${member.email}`}
                                className="text-xs text-primary-500 hover:underline"
                            >
                                {member.email}
                            </a>
                            {member.linkedinUrl && (
                                <a
                                    href={member.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-primary-500 hover:underline mt-1"
                                >
                                    LinkedIn
                                </a>
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-xs text-primary-500 text-center">
                    © {new Date().getFullYear()} Cristal store. All rights reserved.
                </p>
                <p className="text-primary-500 text-xs">Av. 9 de Julio 1234, Buenos Aires, Argentina</p>
                <p className="text-primary-500 text-xs">contacto@cristalstore.com | +549115791243</p>
            </footer>
        </>
    );
}

export default Footer;