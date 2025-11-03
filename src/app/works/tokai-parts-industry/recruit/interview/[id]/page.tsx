/**
 * @work 東海部品工業 先輩インタビュー詳細ページ
 * @category 製造業 リクルートサイト インタビュー
 *
 * === ページ構成 ===
 * @technique ヒーローセクション（大型社員写真＋プロフィール）
 * @technique Q&Aセクション（5つの質問と回答、画像付き）
 * @technique Daily Flowセクション（1日のスケジュール、タイムライン形式）
 * @technique 先輩からのメッセージ（吹き出し形式）
 * @technique Other interviewセクション（他のインタビューカード）
 * @technique FAQ & RECRUITMENTボタン
 *
 * === デザイン・ビジュアル ===
 * @technique グラデーション背景（緑→白、青→白）
 * @technique 円形アバター画像
 * @technique タイムラインアイコン（緑の丸）
 * @technique レスポンシブグリッドレイアウト
 * @technique 吹き出しスタイル
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
import { Clock, MapPin, Briefcase } from 'lucide-react'
import { Metadata } from 'next'

// インタビューデータ型
interface InterviewData {
  id: string
  name: string
  year: string
  dept: string
  factory: string
  position: string
  title: string
  heroImage: string
  profile: {
    avatar: string
    description: string
  }
  questions: {
    number: string
    question: string
    answer: string
    image?: string
    imagePosition?: 'left' | 'right'
  }[]
  dailyFlow: {
    time: string
    title: string
    description: string
    image?: string
  }[]
  message: string
  relatedInterviews: string[]
}

// ダミーデータ（実際はAPIやデータベースから取得）
const interviewsData: { [key: string]: InterviewData } = {
  '01': {
    id: '01',
    name: 'F.Mさん',
    year: '2010年入社',
    dept: '柳原工場',
    factory: '設備保全課',
    position: '',
    title: '「設備を停めない！」その信念を元に、保全の仕事に打ち込んでいます！',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: {
      avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg',
      description: '設備の保全業務を担当しています。'
    },
    questions: [
      {
        number: '01',
        question: '現在の仕事内容について教えてください。',
        answer: '柳原工場で設備保全を担当しています。工場の設備が止まらないよう、日々点検とメンテナンスを行っています。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/q1.jpg',
        imagePosition: 'right'
      },
      {
        number: '02',
        question: 'この仕事のやりがいは何ですか？',
        answer: '設備トラブルを未然に防げたとき、そして生産ラインが順調に稼働しているのを見ると、大きなやりがいを感じます。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/q2.jpg',
        imagePosition: 'left'
      },
      {
        number: '03',
        question: '職場環境や共に働く仲間について教えてください。',
        answer: '数年前まではベテランが多かった職場ですが、最近はメンバーの若返りが進み、20代が50%以上を占めています。私は柳原工場と知立工場のチームリーダーとして、約20名のメンバーをまとめています。信頼しあえる活気があります。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/q3.jpg',
        imagePosition: 'right'
      },
      {
        number: '04',
        question: '印象に残ったできることや今までで大変だったことは何ですか？',
        answer: 'トヨタ車体様へ1年間出向した経験が大きかったですね。当社よりも圧倒的に人が多く、いろんな技能、個性を持った人たちに出会うことができました。1年しかいないのに、皆慎しいことなくいろいろな知識を与えてくれて、大きく成長できたと思っています。いまはそその経験で得たものを、後輩たちにフィードバックしています。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/q4.jpg',
        imagePosition: 'left'
      },
      {
        number: '05',
        question: '今後の目標について教えてください。',
        answer: '故障を未然に防ぐ「予防保全」を実現し、機械設備が停まることなく、稼働させ続けられる環境をつくること。そのためには、現状に満足せず、もっと良い方法がないかを探索していくことが大切です。チームリーダーとしても、人をマネジメントするスキルやリーダーシップを身に付けていきたいです。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/q5.jpg',
        imagePosition: 'right'
      }
    ],
    dailyFlow: [
      {
        time: '5:40',
        title: '出社',
        description: 'クルマで出勤。早い時間だと家から10分もかからず到着！ブラックコーヒーで身体を整えます。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/flow1.jpg'
      },
      {
        time: '6:30',
        title: '朝礼',
        description: '1日の流れや朝日の不具合等は今の周知をメンバーと共有し、解決するための方策を考えます。'
      },
      {
        time: '9:00',
        title: '定例ミーティング',
        description: '日々の困りごとを工場のメンバーと共有します。',
        image: '/works/tokai-parts-industry/images/RECRUIT/interview/flow2.jpg'
      },
      {
        time: '10:00',
        title: '点検',
        description: '点検や不具合修理を実施した後、メンバーと一緒に点検結果を確認します。問題があれば迅速に対応します。'
      },
      {
        time: '13:30',
        title: '打合せ',
        description: '設備工事などの計画がある場合は、工事会社や設備メーカーと一緒に打合わせを行います。'
      },
      {
        time: '15:10',
        title: '退社',
        description: '次の勤務者が来るまでに残った業務をこなし、退社。家では家族と趣味で楽しい時間から、子どもの話を聞くのが楽しみ。'
      }
    ],
    message: '保全業務と聞いて、すぐに仕事内容がわかる人は少ないと思いますが、社内の先輩方から丁寧に指導を受けることができ、トヨタ車体様への出向等経験も使えるので、知識や経験をしっかりと蓄えることができます。このような環境で働くことで、日々自分の成長を実感できると思います。ぜひ一緒に働きましょう！',
    relatedInterviews: ['02', '03', '05', '06']
  },
  '02': {
    id: '02',
    name: 'M.Iさん',
    year: '2022年入社',
    dept: '生産管理',
    factory: '安全衛生推進グループ',
    position: '',
    title: '会社だけでなく、現場とも向き合いながら組織を整理していく仕事に魅力を感じました！',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: '生産管理を担当しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: '生産管理部門で安全衛生推進グループに所属し、工場全体の安全管理や改善活動を行っています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '現場の皆さんと一緒に改善活動を進め、より安全な職場環境を作ることができる点です。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: '部署間の連携がよく、様々な部門の方と協力しながら仕事を進められる環境です。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '入社後すぐに大きなプロジェクトに参加させてもらい、責任ある仕事を任せてもらえたことです。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: 'より広い視野を持ち、会社全体の安全管理をリードできる人材になりたいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '8:00', title: '出社', description: '朝一番で各工場の安全パトロールを行います。' },
      { time: '9:00', title: '朝礼・ミーティング', description: '部門メンバーと当日の業務を確認します。' },
      { time: '10:00', title: '現場巡回', description: '各工場を巡回し、安全状況を確認します。' },
      { time: '13:00', title: '改善活動', description: '現場の改善提案をまとめ、実施計画を立てます。' },
      { time: '15:00', title: '報告書作成', description: '1日の活動内容を報告書にまとめます。' },
      { time: '17:00', title: '退社', description: '明日の予定を確認して退社します。' }
    ],
    message: '入社して間もないですが、先輩方が丁寧に教えてくださるので安心して働けています。現場とオフィスの両方で活躍できる仕事なので、幅広いスキルが身につきます！',
    relatedInterviews: ['01', '03', '05', '06']
  },
  '03': {
    id: '03',
    name: 'K.Sさん',
    year: '2019年入社',
    dept: '技術課',
    factory: 'プレス技術グループ',
    position: '',
    title: 'お客様と仲良くものづくりに反映していく、職場の住環境を味わおう。実践講義しよう。',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: 'プレス技術を担当しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: 'プレス技術グループで、金型設計や工程設計を担当しています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '自分が設計した製品が実際に製造され、お客様に届く喜びです。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: 'チームワークが良く、わからないことは気軽に相談できる雰囲気です。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '初めて担当した製品が無事に量産化されたときの達成感は忘れられません。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: 'より高度な技術を習得し、難しい製品の開発にもチャレンジしたいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '8:00', title: '出社', description: 'メールチェックと1日のスケジュール確認。' },
      { time: '9:00', title: '設計作業', description: 'CADを使って金型設計を行います。' },
      { time: '12:00', title: '昼食', description: '同僚と食堂でランチ。' },
      { time: '13:00', title: '現場確認', description: '製造現場で実際の製品を確認します。' },
      { time: '15:00', title: 'ミーティング', description: 'お客様との打ち合わせに参加します。' },
      { time: '17:00', title: '退社', description: '翌日の準備をして退社。' }
    ],
    message: '技術職として、ものづくりの面白さを日々実感しています。お客様の要望を形にする仕事は、やりがいがあります！',
    relatedInterviews: ['01', '02', '05', '06']
  },
  '05': {
    id: '05',
    name: 'K.Mさん',
    year: '2011年入社',
    dept: '製造課',
    factory: 'サブ・管理',
    position: '',
    title: 'チームリーダーとして、人をマネジメントする楽しさを実感しています',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: '製造課でチームリーダーを務めています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: '製造課でチームリーダーとして、約15名のメンバーをまとめています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: 'チームメンバーの成長を見守り、一緒に目標を達成できることです。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: '若手からベテランまで幅広い年代が活躍しており、活気があります。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: 'リーダーに昇格したときの責任の重さと、それを乗り越えた達成感です。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: 'より大きなチームを率い、工場全体をマネジメントできる人材になりたいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '6:30', title: '出社', description: '早朝出社で生産準備を確認。' },
      { time: '7:00', title: '朝礼', description: 'チームメンバーと今日の目標を共有。' },
      { time: '8:00', title: '生産管理', description: 'ラインの稼働状況を監視し、問題があれば対応。' },
      { time: '12:00', title: 'ミーティング', description: '他部署との連絡会議に参加。' },
      { time: '14:00', title: '改善活動', description: '生産性向上のための改善提案を検討。' },
      { time: '15:30', title: '退社', description: '翌日の生産計画を確認して退社。' }
    ],
    message: 'リーダーとしてチームをまとめる難しさもありますが、メンバーと一緒に成長できる喜びはそれ以上です。ぜひ一緒に働きましょう！',
    relatedInterviews: ['06', '07', '08', '09']
  },
  '06': {
    id: '06',
    name: 'K.Nさん',
    year: '2022年入社',
    dept: '製造課',
    factory: 'サブ・管理',
    position: '',
    title: '先輩にアドバイスをいただきながら、日々、自分の成長を実感しています',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: '製造課で製造業務を担当しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: '製造ラインでの組立作業を中心に、品質管理も行っています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '日々新しいことを学び、できることが増えていく実感があります。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: '先輩方が親切に教えてくれるので、安心して仕事を覚えられます。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '初めて一人で作業を任されたとき、先輩の信頼を感じました。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: 'いろいろな技能を身につけ、多能工として活躍したいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '8:00', title: '出社', description: '朝の準備体操と安全確認。' },
      { time: '8:30', title: '作業開始', description: '製造ラインで組立作業。' },
      { time: '10:00', title: '小休憩', description: '短い休憩で水分補給。' },
      { time: '12:00', title: '昼食', description: '食堂で同僚とランチ。' },
      { time: '13:00', title: '午後作業', description: '引き続き組立作業と品質チェック。' },
      { time: '17:00', title: '退社', description: '清掃と片付けをして退社。' }
    ],
    message: '入社してまだ日が浅いですが、先輩方のサポートのおかげで毎日楽しく働けています。成長できる環境があります！',
    relatedInterviews: ['05', '07', '08', '09']
  },
  '07': {
    id: '07',
    name: 'Y.Aさん',
    year: '2021年入社',
    dept: '技術課',
    factory: 'プレス技術',
    position: '',
    title: 'またたまと経験値を上げ！ 新世代ファイルに魅了されこと！',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: 'プレス技術を担当しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: 'プレス加工の工程設計と、品質改善活動を行っています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '新しい技術に挑戦し、製品の品質向上に貢献できることです。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: '若手でも意見を言いやすい、風通しの良い職場です。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '難しい品質問題を解決できたときの達成感は忘れられません。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: '最新の技術を習得し、次世代の製造技術をリードしたいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '8:00', title: '出社', description: 'メールチェックと今日のタスク確認。' },
      { time: '9:00', title: '現場確認', description: 'プレスラインの状況を確認。' },
      { time: '11:00', title: '設計作業', description: 'CADで工程設計を行います。' },
      { time: '13:00', title: '品質会議', description: '品質改善の進捗を報告。' },
      { time: '15:00', title: 'データ解析', description: '製造データを解析し改善点を探します。' },
      { time: '17:00', title: '退社', description: '明日の準備をして退社。' }
    ],
    message: '技術職として、常に新しいことに挑戦できる環境があります。成長したい方にはぴったりの職場です！',
    relatedInterviews: ['05', '06', '08', '09']
  },
  '08': {
    id: '08',
    name: 'K.Kさん',
    year: '2016年入社',
    dept: '技術課',
    factory: '知立技術',
    position: '',
    title: '「説得を守りなさい！」その他の先輩からの言葉により成長してきました！',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: '知立工場の技術課に所属しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: '知立工場で製品設計と技術サポートを担当しています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '先輩からの教えを胸に、後輩の育成にも携われることです。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: '互いに助け合う文化があり、困ったときは必ず誰かが助けてくれます。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '先輩からの厳しくも温かい指導のおかげで、大きく成長できました。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: '先輩から受けた恩を、今度は後輩に返していきたいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '8:00', title: '出社', description: '朝のミーティングで今日の予定を確認。' },
      { time: '9:00', title: '設計業務', description: '製品設計と図面作成。' },
      { time: '11:00', title: '現場サポート', description: '製造現場の技術的な問題をサポート。' },
      { time: '13:00', title: '打ち合わせ', description: 'お客様との技術打ち合わせ。' },
      { time: '15:00', title: '後輩指導', description: '若手社員への技術指導。' },
      { time: '17:00', title: '退社', description: '資料整理をして退社。' }
    ],
    message: '先輩方の教えのおかげで今の自分があります。この会社には人を育てる文化があり、安心して成長できます！',
    relatedInterviews: ['05', '06', '07', '09']
  },
  '09': {
    id: '09',
    name: 'E.Mさん',
    year: '2022年入社',
    dept: '製造課',
    factory: '知立工場',
    position: '',
    title: '溶接の技術を学びながら、職場全員が気を配ってくれたのでチャレンジ！',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: '知立工場で溶接作業を担当しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: '知立工場で溶接作業を中心に、製造業務全般を担当しています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '溶接技術が上達し、綺麗な仕上がりができたときの達成感です。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: '周りの方々がいつも気にかけてくれる、温かい職場です。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '初めて難しい溶接作業を任され、無事にやり遂げたことです。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: '溶接の資格を取得し、さらに技術を磨いていきたいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '8:00', title: '出社', description: '作業服に着替えて準備体操。' },
      { time: '8:30', title: '作業開始', description: '溶接作業と製品の組立。' },
      { time: '10:00', title: '小休憩', description: '短い休憩で水分補給。' },
      { time: '12:00', title: '昼食', description: '同僚と一緒にランチ。' },
      { time: '13:00', title: '午後作業', description: '引き続き溶接作業と品質チェック。' },
      { time: '17:00', title: '退社', description: '清掃と道具の手入れをして退社。' }
    ],
    message: '溶接は難しいですが、先輩方が丁寧に教えてくれるので着実に上達しています。ものづくりの楽しさを実感できる職場です！',
    relatedInterviews: ['05', '06', '07', '08']
  },
  '10': {
    id: '10',
    name: 'S.Tさん',
    year: '2019年入社',
    dept: 'いなべ工場',
    factory: '工場管理',
    position: '',
    title: 'アットホームな雰囲気の中で、神びがに働けるお疲れを',
    heroImage: '/works/tokai-parts-industry/images/RECRUIT/interview/hero.jpg',
    profile: { avatar: '/works/tokai-parts-industry/images/RECRUIT/interview/avatar.jpg', description: 'いなべ工場で工場管理を担当しています。' },
    questions: [
      { number: '01', question: '現在の仕事内容について教えてください。', answer: 'いなべ工場で生産管理と品質管理を担当しています。', imagePosition: 'right' },
      { number: '02', question: 'この仕事のやりがいは何ですか？', answer: '工場全体を見渡し、効率的な生産をサポートできることです。', imagePosition: 'left' },
      { number: '03', question: '職場環境について教えてください。', answer: 'アットホームな雰囲気で、みんなで協力し合う文化があります。', imagePosition: 'right' },
      { number: '04', question: '印象に残った出来事は？', answer: '大きなトラブルをチームで乗り越えたときの一体感です。', imagePosition: 'left' },
      { number: '05', question: '今後の目標について教えてください。', answer: 'より効率的な生産体制を構築し、工場の発展に貢献したいです。', imagePosition: 'right' }
    ],
    dailyFlow: [
      { time: '7:30', title: '出社', description: '早めに出社して1日の準備。' },
      { time: '8:00', title: '朝礼', description: '工場メンバーと今日の生産計画を確認。' },
      { time: '9:00', title: '生産管理', description: '生産ラインの進捗を管理。' },
      { time: '13:00', title: '品質チェック', description: '製品の品質状況を確認。' },
      { time: '15:00', title: '報告書作成', description: '1日の生産実績をまとめます。' },
      { time: '17:00', title: '退社', description: '翌日の準備をして退社。' }
    ],
    message: 'いなべ工場は家族のような温かい雰囲気で、毎日楽しく働いています。働きやすい環境で成長したい方におすすめです！',
    relatedInterviews: ['05', '06', '07', '08']
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const interview = interviewsData[id]
  return {
    title: `${interview?.name || ''} インタビュー | 東海部品工業株式会社`,
    description: interview?.title || '先輩社員のインタビュー',
  }
}

export default async function InterviewDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const interview = interviewsData[id]

  if (!interview) {
    return <div>インタビューが見つかりません</div>
  }

  // 他のインタビューデータ（簡易版）
  const otherInterviews = [
    { id: '05', name: 'F.Mさん', year: '2010年入社', dept: '柳原工場', position: '設備保全課', title: '「設備を停めない！」その信念を元に、保全の仕事に打ち込んでいます！' },
    { id: '06', name: 'E.Mさん', year: '2002年入社', dept: '柳原工場', position: '知立生産課', title: '溶接の技術をもっと究めたい。取れる資格は何でもチャレンジ！' },
    { id: '07', name: 'S.Yさん', year: '2010年入社', dept: 'いなべ工場', position: '塗装・整備課', title: 'アットホームな雰囲気の中で、伸び伸びと働ける社風です。' },
    { id: '08', name: 'N.Yさん', year: '2019年入社', dept: '経営管理部', position: '経理・企画グループ', title: '経理だけでなく、税務関係の知識も蓄えていきたいです！' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <RecruitHeader />

      <main>
        {/* Back to List Button */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/works/tokai-parts-industry/recruit/interview"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              先輩インタビュー一覧へ戻る
            </Link>
          </div>
        </div>

        {/* Hero Section - ヒーローセクション */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 左側：社員写真 */}
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* 実際の画像に置き換える */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400"></div>
                </div>
              </div>

              {/* 右側：プロフィール */}
              <div>
                <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                  Interview {interview.id}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {interview.title}
                </h1>
                <div className="space-y-3 text-gray-700 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">{interview.year}</span>
                    <span>{interview.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span>{interview.dept}</span>
                    <span>{interview.factory}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Q&A Sections - 質問と回答セクション */}
        <section className="py-20 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {interview.questions.map((q, index) => (
                <div key={q.number} className={`grid md:grid-cols-2 gap-8 items-center ${q.number === '05' ? 'relative' : ''}`}>
                  {/* Q5は特別なレイアウト（大きな円形背景） */}
                  {q.number === '05' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[600px] h-[600px] rounded-full bg-blue-200 opacity-50"></div>
                    </div>
                  )}

                  {/* 画像（左右交互） */}
                  {q.imagePosition === 'left' && q.image && (
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                      {/* 実際の画像に置き換える */}
                      <div className="absolute inset-0 bg-gray-200"></div>
                    </div>
                  )}

                  {/* テキスト */}
                  <div className={`relative z-10 ${q.imagePosition === 'left' ? 'md:order-last' : ''}`}>
                    <div className="mb-4">
                      <span className="text-6xl font-bold text-gray-200">{q.number}</span>
                      <p className="text-sm text-gray-500 mb-2">Question</p>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
                      {q.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {q.answer}
                    </p>
                  </div>

                  {/* 画像（右側） */}
                  {q.imagePosition === 'right' && q.image && (
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                      {/* 実際の画像に置き換える */}
                      <div className="absolute inset-0 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily Flow Section - 1日のスケジュール */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif italic text-green-600 mb-4">Daily Flow</h2>
              <p className="text-2xl font-bold text-blue-600">1日のスケジュール</p>
            </div>

            <div className="space-y-8">
              {interview.dailyFlow.map((flow, index) => (
                <div key={index} className="flex gap-6">
                  {/* タイムラインアイコン */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <Clock className="w-8 h-8" />
                    </div>
                    {index < interview.dailyFlow.length - 1 && (
                      <div className="w-0.5 h-20 bg-green-300 my-2"></div>
                    )}
                  </div>

                  {/* 時間とコンテンツ */}
                  <div className="flex-1 pb-12">
                    <div className="flex items-start gap-6">
                      <div className="min-w-[80px]">
                        <p className="text-3xl font-bold text-gray-900">{flow.time}</p>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{flow.title}</h3>
                        <p className="text-gray-700 mb-4">{flow.description}</p>
                        {flow.image && (
                          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                            {/* 実際の画像に置き換える */}
                            <div className="absolute inset-0 bg-gray-200"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Message Section - 先輩からのメッセージ */}
        <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">先輩からのメッセージ</h2>

            <div className="flex items-start gap-6">
              {/* アバター */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-lg relative">
                  {/* 実際の画像に置き換える */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                </div>
              </div>

              {/* 吹き出し */}
              <div className="flex-1 relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg border-4 border-blue-400">
                  <p className="text-gray-700 leading-relaxed">{interview.message}</p>
                </div>
                {/* 吹き出しの三角 */}
                <div className="absolute left-0 top-8 -translate-x-3 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[20px] border-r-blue-400"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Interview Section */}
        <section className="py-20 bg-gradient-to-b from-green-100 to-green-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-serif italic text-blue-600 text-center mb-12">Other interview</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {otherInterviews.map((item) => (
                <Link
                  key={item.id}
                  href={`/works/tokai-parts-industry/recruit/interview/${item.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    <div className="relative aspect-[3/4]">
                      {/* 実際の画像に置き換える */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-4">
                        <div className="text-white w-full">
                          <p className="text-xs mb-1">{item.year} {item.name}</p>
                          <p className="text-xs mb-1">{item.dept} {item.position}</p>
                          <p className="text-xs line-clamp-3">{item.title}</p>
                          <p className="text-orange-500 text-xs font-bold mt-2">Read more →</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/works/tokai-parts-industry/recruit/interview"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                先輩インタビュー一覧へ →
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
                href="/works/tokai-parts-industry/recruit/faq"
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
