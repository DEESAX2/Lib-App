import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { apiClient } from "../api/client";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import SubmitButton from "../components/SubmitButton";




export default function EditBook() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');


    const [book, setBook] = useState({});

    const getBook = () => {
        apiClient.get(`/book/${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(getBook, []);

    const patchBook = async (data) => {

        //Post data to api
        try {
            const response = await apiClient.patch(`/book/${id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center bg-amber-300  justify-center pt-40 md:pt-40 lg:pt-40">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
                   
                    <h2 className="text-3xl font-bold mb-6 text-center">{t("📔Edit Book Details")}</h2>
                    <form action={patchBook} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{t("Title")}</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue={book.title}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{t("Author")}</label>
                            <input
                                type="text"
                                name="author"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue={book.author}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{t("Genre")}</label>
                            <input
                                name="genre"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue={book.genre}
                                placeholder="eg.Fiction"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{t("Published Date")}</label>
                            <input
                                type="date"
                                name="published"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue="2022-08-15"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">{t("Cover Image URL")}</label>
                            <input
                                type="text"
                                name="imageUrl"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue={book.imageUrl}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t("rating")}</label>
                            <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        className="focus:outline-none"
                                        tabIndex={-1}
                                    >
                                        <Star
                                            size={24}
                                            fill={0 >= star ? "#facc15" : "none"}
                                            stroke="#facc15"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <SubmitButton
                            title={t("Update Book")}
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                        />
                        {/* <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                        >
                            {t("Update Book")}
                        </button> */}
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}



