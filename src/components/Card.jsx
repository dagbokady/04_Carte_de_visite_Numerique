// components/Card.jsx
export default function Card({
                                 name = "Kady Dagbo",
                                 jobTitle = "Développeur Full Stack",
                                 company = "Company",
                                 phone = "+225 07 79 03 14 54",
                                 email = "kady@email.ci",
                                 website = "www.website.ci",
                                 location = "Abidjan, Côte d'Ivoire",
                                 color = "#2563eb",
                                 logoUrl,
                                 photoUrl,
                             }) {

    return (
        <div
            className="w-full max-w-sm min-h-[500px] rounded-xl shadow-lg overflow-hidden"
            style={{ backgroundColor: "#f8fafc" }}
        >

            <div
                className="h-4 w-full"
                style={{ backgroundColor: color }}
            />

            <div className="p-6">

                <div className="flex items-center gap-4 mb-6">
                    {photoUrl ? (
                        <img
                            src={photoUrl}
                            alt={name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                        />
                    ) : (
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                            style={{ backgroundColor: color }}
                        >
                            {name.charAt(0)}
                        </div>
                    )}

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                        <p className="text-gray-600">{jobTitle}</p>
                        {company && (
                            <p className="text-gray-500 text-sm mt-1">{company}</p>
                        )}
                    </div>
                </div>


                {location && (
                    <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 text-gray-600">
                            <span>📍</span>
                            <span>{location}</span>
                        </div>
                    </div>
                )}


                <div className="space-y-3 mb-8">
                    {phone && (
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                            <div className="p-2 rounded-md" style={{ backgroundColor: color + "20" }}>
                                <span className="text-gray-700">📱</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Téléphone</p>
                                <p className="font-medium">{phone}</p>
                            </div>
                        </div>
                    )}

                    {email && (
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                            <div className="p-2 rounded-md" style={{ backgroundColor: color + "20" }}>
                                <span className="text-gray-700">✉️</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Email</p>
                                <p className="font-medium truncate">{email}</p>
                            </div>
                        </div>
                    )}

                    {website && (
                        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100">
                            <div className="p-2 rounded-md" style={{ backgroundColor: color + "20" }}>
                                <span className="text-gray-700">🌐</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Site web</p>
                                <p className="font-medium">{website.replace(/^https?:\/\//, '')}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Logo en bas */}
                <div className="pt-4 border-t border-gray-200">
                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt="Logo"
                            className="h-8 w-auto mx-auto"
                        />
                    ) : (
                        <p className="text-center text-sm text-gray-400">Carte de visite</p>
                    )}
                </div>
            </div>
        </div>
    );
}