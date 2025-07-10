const questions = {
    easy: [ // Mod Senang
        {
            level: 1, // Level 1
            questions: [
                {
                    question: "الكتابُ. ماذا الإعراب لهذه الكلمة؟", // Soalan
                    choices: ["مرفوع", "منصوب", "مجرور", "مجزوم"],     // Pilihan jawapan
                    answer: 0
                },
                {
                    question: "Apakah tanda Marfu'?", 
                    choices: ["Fathah", "Kasrah", "Dhommah", "Sukun"],
                    answer: 2 // Jawapan betul (index 2 = Dhommah)
                }
                // ...tambah sehingga 15 soalan
            ]
        },
        {
            level: 2,
            questions: [ /* Soalan level 2 */ ]
        },
        // ...tambah sehingga level 10
    ],
    medium: [ /* Sama macam easy tapi untuk Mod Sederhana */ ],
    hard: [ /* Sama macam easy tapi untuk Mod Susah */ ]
};
