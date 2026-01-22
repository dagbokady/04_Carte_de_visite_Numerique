// components/Menu.jsx
import { useState } from 'react';

export default function Menu({ onChange }) {
    const [form, setForm] = useState({
        name : "Kady Dagbo",
        jobTitle : "Développeur Full Stack",
        company : "Company",
        phone : "+225 07 79 03 14 54",
        email : "kady@email.ci",
        website : "www.website.ci",
        location : "Abidjan, Côte d'Ivoire",
        color : "#2563eb",
        photoUrl: '',
        logoUrl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newForm = { ...form, [name]: value };
        setForm(newForm);
        onChange?.(newForm);
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const newForm = { ...form, [field]: reader.result };
            setForm(newForm);
            onChange?.(newForm);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Informations de la carte
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

                {/* Colonne 1 */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Nom complet
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Votre Nom"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Poste / Titre
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={form.jobTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Votre Profession"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Entreprise
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Votre Entreprise"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Couleur principale
                        </label>
                        <div className="flex items-center gap-3">
                            <input
                                type="color"
                                name="color"
                                value={form.color}
                                onChange={handleChange}
                                className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                            />
                            <input
                                type="text"
                                name="color"
                                value={form.color}
                                onChange={handleChange}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Colonne 2 */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Téléphone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="+225 ..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Site web
                        </label>
                        <input
                            type="url"
                            name="website"
                            value={form.website}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="https://..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Ville / Localisation
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={form.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Section images */}
            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Photo de profil
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'photoUrl')}
                        className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              cursor-pointer"
                    />
                    {form.photoUrl && (
                        <div className="mt-3">
                            <img
                                src={form.photoUrl}
                                alt="Aperçu photo"
                                className="w-24 h-24 object-cover rounded-full border-2 border-gray-200 shadow-sm"
                            />
                        </div>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Logo de l'entreprise
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'logoUrl')}
                        className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              cursor-pointer"
                    />
                    {form.logoUrl && (
                        <div className="mt-3">
                            <img
                                src={form.logoUrl}
                                alt="Aperçu logo"
                                className="h-16 object-contain border border-gray-200 rounded shadow-sm"
                            />
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
}