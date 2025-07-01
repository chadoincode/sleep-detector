export type SleepQuality = "Baik" |  "Sedang" | "Buruk"

type SleepTipsData = {
  tips: string[],
  color: string
  emoji: string
  medicalAdvice: string
}

export const SleepTips: Record<SleepQuality, SleepTipsData> = {
  Baik: {
    tips: [
      "Pertahankan rutinitas tidur yang konsisten",
      "Hindari gadget 1 jam sebelum tidur",
      "Tetap aktif secara fisik di siang hari"
    ],
    color: "bg-green-100 text-green-800 border-green-400",
    emoji: "😴",
    medicalAdvice: "Kualitas tidur Anda baik. Tidak perlu intervensi medis, cukup lanjutkan kebiasaan sehat saat ini. Perhatikan jika ada perubahan mendadak dalam pola tidur."
  },
  Sedang: {
    tips: [
      "Coba tidur lebih awal minimal 7 jam dan batasi layar sebelum tidur",
      "Kurangi konsumsi kafein dan gula setelah sore hari",
      "Gunakan teknik relaksasi sebelum tidur"
    ],
    color: "bg-yellow-100 text-yellow-800 border-yellow-400",
    emoji: "😐",
    medicalAdvice: "Tidur Anda tergolong cukup, namun belum ideal. Mulailah menerapkan sleep hygiene seperti jam tidur tetap dan menghindari gadget 1 jam sebelum tidur."
  },
  Buruk: {
    tips: [
      "Tidur terlalu singkat, usahakan minimal 7 jam",
      "Tingkatkan aktivitas fisik harian",
      "Ciptakan suasana kamar tidur yang nyaman",
      "Jika berlanjut, pertimbangkan konsultasi dengan ahli"
    ],
    color: "bg-red-100 text-red-800 border-red-400",
    emoji: "😟",
    medicalAdvice: "Kualitas tidur Anda buruk. Jika berlangsung lebih dari seminggu, disarankan konsultasi ke dokter atau psikolog untuk mengevaluasi insomnia, stres, atau gangguan tidur lainnya."
  }
}
  