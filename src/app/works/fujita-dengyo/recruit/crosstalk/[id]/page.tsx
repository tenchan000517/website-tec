/**
 * @work フジタ電業 クロストーク詳細ページ
 * @category 製造業 リクルートサイト クロストーク
 *
 * === ページ構成 ===
 * @technique ヒーローセクション（複数社員写真）
 * @technique メンバー紹介セクション
 * @technique 対話形式Q&Aセクション（緑背景、アバター付き吹き出し）
 * @technique セクション区切り（SECTION2など）
 * @technique 集合写真セクション
 * @technique Other crosstalkセクション
 * @technique FAQ & RECRUITMENTボタン
 *
 * === デザイン・ビジュアル ===
 * @technique グラデーション背景（緑→白）
 * @technique 円形アバター画像
 * @technique 吹き出しスタイル（左右交互）
 * @technique レスポンシブグリッドレイアウト
 * @technique カード型レイアウト
 *
 * === 技術仕様 ===
 * @technique Next.js 14 App Router (Dynamic Routes)
 * @technique TypeScript
 * @technique Tailwind CSS
 * @technique Lucide React Icons
 * @technique Image optimization with next/image
 *
 * === SEO・アクセシビリティ ===
 * @technique メタデータ生成（generateMetadata）
 * @technique セマンティックHTML
 * @technique 適切な見出し階層
 */

import Image from 'next/image'
import Link from 'next/link'
import RecruitHeader from '@/components/works/tokai-parts-industry/RecruitHeader'
import Footer from '@/components/works/tokai-parts-industry/Footer'
import { Metadata } from 'next'

// クロストークデータ型
interface CrosstalkData {
  id: string
  title: string
  members: {
    name: string
    dept: string
    group: string
    position: string
    avatar: string
  }[]
  heroImages: string[]
  sections: {
    title?: string
    questions: {
      question: string
      answers: {
        speaker: string
        text: string
      }[]
      image?: string
    }[]
  }[]
  finalImage?: string
  otherCrosstalk: string
}

// ダミーデータ
const crosstalksData: { [key: string]: CrosstalkData } = {
  '01': {
    id: '01',
    title: '技術部門の先輩・後輩座談会',
    members: [
      {
        name: 'N.Tさん',
        dept: '技術課',
        group: '製品技術グループ',
        position: '先輩',
        avatar: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/avatar1.jpg'
      },
      {
        name: 'I.Rさん',
        dept: '技術課',
        group: '製品技術グループ',
        position: '',
        avatar: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/avatar2.jpg'
      },
      {
        name: 'M.Rさん',
        dept: '技術課',
        group: '製品技術グループ',
        position: '',
        avatar: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/avatar3.jpg'
      }
    ],
    heroImages: [
      '/works/tokai-parts-industry/images/RECRUIT/crosstalk/hero1.jpg',
      '/works/tokai-parts-industry/images/RECRUIT/crosstalk/hero2.jpg',
      '/works/tokai-parts-industry/images/RECRUIT/crosstalk/hero3.jpg'
    ],
    sections: [
      {
        questions: [
          {
            question: '後輩の育成について、大切にしていることを教えてください',
            answers: [
              {
                speaker: 'N.Tさん',
                text: '後輩だけでなく、人に教えるときは、何よりも自分がそのことを深く理解していないとダメ。だから、まず自分の理解を深めることから始めることが大切です。あとは教える相手のレベルに合って、その人のレベルに合った教え方をすること。専門用語を使って理解させる相手ではないので、言葉を噛み砕いて伝えることが大事だと思います。'
              },
              {
                speaker: 'I.Rさん',
                text: '僕はまだ教える経験が少ないので、どのように教えれば、後輩たちのためになるのか、こちらの意図が伝わるのか、いろいろ試行錯誤して自分なりの方法を見つけ出していきたいです。'
              },
              {
                speaker: 'M.Rさん',
                text: '人に教えるのははたから見れば、何もスキルがいることではまもなけど、これも結果どこまで相手がうまく理解できるかが重要です。ビジネスでよく使われている3C分析という考え方があって、まず自分を理解し、次相手を理解して、はじめて理解してもらえるようにくい仕組みを使用としています。'
              }
            ]
          },
          {
            question: 'フジタ電業で働く魅力はどこにあると思いますか？',
            answers: [
              {
                speaker: 'N.Tさん',
                text: 'さっきの強さの話と似てるのですが、やっぱり部署間の垣根が低く、連携がしっかり取れているところですね。これって、働きやすさにつながるんです。何か課題があったらも「うちのようなものは地産組合につながるんですが」って感じで協力しやすいところがあります。'
              },
              {
                speaker: 'M.Rさん',
                text: '自分の意見が通りやすいの環境があなる。自分が「もっとこうしたほうがいい」と思えば提案しただけのところが採用されることが多いです。中小企業ならではの良さですよね。'
              },
              {
                speaker: 'I.Rさん',
                text: '皆さん、さすがにいらっこと言いますよね。僕は……ちょっと外れちゃしれないんですけど、休みが取りやすいことです（笑）。'
              }
            ]
          },
          {
            question: '皆さんは、プライベートでも交流はありますか？',
            answers: [
              {
                speaker: 'N.Tさん',
                text: 'いまはコロナ禍でなかなかできないと。スポーツはみんななにもくやってましたね。'
              },
              {
                speaker: 'M.Rさん',
                text: 'そうですね。テニス、バドミントン、フットサルなんかは一緒にやってました。あとは行先を知らされないシークレット飲み会とか（笑）。'
              },
              {
                speaker: 'I.Rさん',
                text: 'ゲームもやますよね。オンラインで。いんにもコロナ禍での交流って感じですか。'
              },
              {
                speaker: 'N.Tさん',
                text: '仕事が離れたとこで交流することで、あながりその人の価値あどか、本音を聞けたりするんですよ。それが、その人のことをより良く知る形っかけになったり、今後もプライベートでの交流を続けていければいいなと思っています。'
              }
            ]
          }
        ]
      }
    ],
    finalImage: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/final.jpg',
    otherCrosstalk: '02'
  },
  '02': {
    id: '02',
    title: '製造部門の上司・部下座談会',
    members: [
      {
        name: 'H.Sさん',
        dept: 'いなべ工場',
        group: 'はずみ一課',
        position: '',
        avatar: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/avatar4.jpg'
      },
      {
        name: 'S.Sさん',
        dept: 'いなべ工場',
        group: '成形一課',
        position: '',
        avatar: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/avatar5.jpg'
      }
    ],
    heroImages: [
      '/works/tokai-parts-industry/images/RECRUIT/crosstalk/hero4.jpg',
      '/works/tokai-parts-industry/images/RECRUIT/crosstalk/hero5.jpg'
    ],
    sections: [
      {
        questions: [
          {
            question: 'お2人の仕事内容や関係性を教えてください',
            answers: [
              {
                speaker: 'H.Sさん',
                text: '私はいなべ工場で生産している製品全般を見ながら、メンバーの動線管理、現場サポート、工場内の巡回の、安全や品質についての管理など、幅広くやっています。'
              },
              {
                speaker: 'S.Sさん',
                text: '僕はハイエースの下回りを担当しています。スポット溶接やシートリテーナー部材などを約述ら従業員10名ほどのメンバーをまとめる設定日でもあります。H.Sさんは僕が入社したときから教育係だったんですよね。'
              },
              {
                speaker: 'H.Sさん',
                text: 'そうそう。そのときはまだ新入社員10人くらいを教えていて、Sさんはその中の1人だったんよね。'
              }
            ]
          },
          {
            question: '入社前と入社後で会社の印象に違いはありましたか？',
            answers: [
              {
                speaker: 'S.Sさん',
                text: '自動車部品を製造している工場って、日常経験的なヘテランが多くて、ゴツモテのカ方がいっぱいはいるのかなると思ったんですが、実際に入社してみるとみんな明るくて優しい人が多く、いい思議でギャップを感じしました。H.Sさんはコワモテですけど……（笑）。'
              }
            ]
          }
        ]
      },
      {
        title: '上から下、というよりは、隣で寄り添う感じを意識しています',
        questions: [
          {
            question: '上司に「教わった」と感じたエピソードはありますか？',
            answers: [
              {
                speaker: 'S.Sさん',
                text: 'いちばんんは「質問に固さ使う姿勢」ですす。教えるとか、指摘するというよりも「質り添ってくれる」と言った方が正しいかもしれません。チームが円滑に回るように口頭確やコミュニケーションを取り、体調面も気にかけてくれる。常にメンバーの側にいてくれる印象があります。'
              },
              {
                speaker: 'H.Sさん',
                text: 'Sさんがそう感じてくれているならうれしいですすね。私もまさにそんな気持ちで接していて、上からな、というより言葉が周り添う感じ、上司としてはまます。庶ての点がいることを、個々ペいることを言い替えすり労務締っくりがな事だと思っています。'
              }
            ]
          },
          {
            question: 'お2人が感じるフジタ電業で働く魅力を教えてください',
            answers: [
              {
                speaker: 'H.Sさん',
                text: '何と言ってもフレンドリーでアットホームな雰囲気じゃないですかね？'
              },
              {
                speaker: 'S.Sさん',
                text: '僕もそう思います。年配に関係なく、気軽に話を聞いてくれれし、人の温かさを感じます。'
              },
              {
                speaker: 'H.Sさん',
                text: 'そういう社風をつくったのは、社内のイベントが多いことも関係してるようと思います。いまはコロナ禍でできないことも多いですけどね。'
              },
              {
                speaker: 'S.Sさん',
                text: '屋運祭、ボウリング、夏祭りなど、いろいろありましたよね。みんな和気あいいに楽しんでいるので、そのような有り場中いは仕事中ももカされているのかもしれません。'
              }
            ]
          },
          {
            question: 'では、最後に就職活動をしている学生の皆さんへメッセージをお願いします',
            answers: [
              {
                speaker: 'S.Sさん',
                text: '当社で働けば、自分で考え、自分で行動できる自主性のある人間に育つと思います。僕も実際そうでした。厳しいこともあるけど、その分、成長も実感できますし、会社の学校同のってネットなどからの情報ではななか伝わらにいので、ぜひ会社説明会に来ていただいてしばいなよと思います。'
              },
              {
                speaker: 'H.Sさん',
                text: '最初は誰でも未経験なのでスタートラインは一緒です。しっかりと教育しますので、安心してください。若い世代もたくさんいるので、居心地がいいし、何より働きやすい会社だと思います。'
              }
            ]
          }
        ]
      }
    ],
    finalImage: '/works/tokai-parts-industry/images/RECRUIT/crosstalk/final2.jpg',
    otherCrosstalk: '01'
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const crosstalk = crosstalksData[id]
  return {
    title: `${crosstalk?.title || ''} | フジタ電業株式会社`,
    description: crosstalk?.title || 'クロストーク',
  }
}

export default async function CrosstalkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const crosstalk = crosstalksData[id]

  if (!crosstalk) {
    return <div>クロストークが見つかりません</div>
  }

  // もう一方のクロストーク情報
  const otherCrosstalkData = crosstalksData[crosstalk.otherCrosstalk]

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Back to List Button */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/works/fujita-dengyo/recruit/crosstalk"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              クロストーク一覧へ戻る
            </Link>
          </div>
        </div>

        {/* Hero Section - ヒーローセクション */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3">
            {crosstalk.heroImages.map((img, index) => (
              <div key={index} className="relative">
                {/* 実際の画像に置き換える */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-serif italic text-2xl mb-4">Crosstalk</p>
              <p className="text-sm text-green-300 mb-2">クロストーク</p>
            </div>
          </div>
        </section>

        {/* Introduction Section - イントロダクション */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full text-sm font-serif italic mb-4">
                Crosstalk {crosstalk.id}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {crosstalk.title}
              </h1>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                若者活躍しているな企業のチカラではたにこることは...
              </p>
            </div>

            {/* メンバー紹介 */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {crosstalk.members.map((member, index) => (
                <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-green-400 to-green-600">
                    {/* 実際の画像に置き換える */}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.dept}</p>
                    <p className="text-sm text-gray-600">{member.group}</p>
                    {member.position && (
                      <p className="text-xs text-green-600 font-semibold mt-1">{member.position}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Q&A Sections - 対話セクション */}
        {crosstalk.sections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="py-20 bg-gradient-to-b from-green-50 to-green-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* セクションタイトル（SECTION2など） */}
              {section.title && (
                <div className="text-center mb-16">
                  <div className="inline-block bg-yellow-400 text-xs font-bold px-4 py-1 rounded mb-4">
                    SECTION{sectionIndex + 1}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                    {section.title}
                  </h2>
                </div>
              )}

              {/* 質問と回答 */}
              <div className="space-y-16">
                {section.questions.map((q, qIndex) => (
                  <div key={qIndex}>
                    {/* 質問タイトル */}
                    <div className="text-center mb-8">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-600 inline-block border-b-4 border-blue-600 pb-2">
                        {q.question}
                      </h3>
                    </div>

                    {/* 回答（対話形式） */}
                    <div className="space-y-6">
                      {q.answers.map((answer, aIndex) => {
                        const member = crosstalk.members.find(m => m.name === answer.speaker)
                        const isLeft = aIndex % 2 === 0

                        return (
                          <div key={aIndex} className={`flex items-start gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                            {/* アバター */}
                            <div className="flex-shrink-0 text-center">
                              <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-green-600 mb-2">
                                {/* 実際の画像に置き換える */}
                              </div>
                              <p className="text-xs font-bold text-gray-700">{answer.speaker}</p>
                            </div>

                            {/* 吹き出し */}
                            <div className={`flex-1 max-w-2xl relative`}>
                              <div className="bg-white rounded-2xl p-6 shadow-md">
                                <p className="text-gray-700 leading-relaxed">{answer.text}</p>
                              </div>
                              {/* 吹き出しの三角 */}
                              {isLeft ? (
                                <div className="absolute left-0 top-6 -translate-x-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-white"></div>
                              ) : (
                                <div className="absolute right-0 top-6 translate-x-3 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-white"></div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* 質問に関連する画像 */}
                    {q.image && (
                      <div className="mt-8 max-w-3xl mx-auto">
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                          {/* 実際の画像に置き換える */}
                          <div className="absolute inset-0 bg-gray-200"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Final Image Section - 集合写真 */}
        {crosstalk.finalImage && (
          <section className="py-20 bg-gradient-to-b from-green-100 to-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
                {/* 実際の画像に置き換える */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400"></div>
              </div>
            </div>
          </section>
        )}

        {/* Other Crosstalk Section */}
        <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif italic text-blue-600 text-center mb-12">Other crosstalk</h2>

            <Link
              href={`/works/fujita-dengyo/recruit/crosstalk/${crosstalk.otherCrosstalk}`}
              className="group block"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* 左側：テキスト */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-serif italic mb-4 self-start">
                      Crosstalk {otherCrosstalkData.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {otherCrosstalkData.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      {otherCrosstalkData.members.map((member, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          <span className="font-bold">{member.name}</span>
                          {index < otherCrosstalkData.members.length - 1 && <span className="mx-2">×</span>}
                        </div>
                      ))}
                    </div>
                    <p className="text-orange-500 font-bold">Read more →</p>
                  </div>

                  {/* 右側：画像 */}
                  <div className="relative aspect-square md:aspect-auto">
                    {/* 実際の画像に置き換える */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600"></div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="text-center mt-12">
              <Link
                href="/works/fujita-dengyo/recruit/crosstalk"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                クロストーク一覧へ →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ & RECRUITMENT Buttons */}
        <section className="py-16 bg-gradient-to-b from-green-400 to-green-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {/* FAQ */}
              <Link
                href="/works/fujita-dengyo/recruit/faq"
                className="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-4 w-full md:w-auto"
              >
                <div>
                  <p className="text-blue-600 font-bold text-2xl">FAQ</p>
                  <p className="text-sm text-gray-600">よくある質問</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* RECRUITMENT */}
              <Link
                href="#recruitment"
                className="group bg-white hover:bg-gray-50 rounded-full px-12 py-6 shadow-lg hover:shadow-xl transition-all flex items-center gap-4 w-full md:w-auto"
              >
                <div>
                  <p className="text-blue-600 font-bold text-2xl">RECRUITMENT</p>
                  <p className="text-sm text-gray-600">募集情報</p>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
