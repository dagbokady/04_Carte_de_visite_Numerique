import Menu from "./components/Menu.jsx";
import Card from "./components/Card.jsx";
import {useState} from "react";
import {Footer, Navbar} from "./components/Global.jsx";

export default function App() {
    const [cardData, setCardData] = useState({});

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">

            <Navbar />

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <Menu onChange={setCardData} />
                        <div className="flex items-center justify-center min-h-[500px]">
                            <Card {...cardData} />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}