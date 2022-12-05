# react-inventory-dot

買い物リスト
今の状態ではバグが解消されない。
setItems(newItems)で items が最新かされているはずなのに items を console.log するとされてなく見える状態。

一方で warning で key を設定せよ。とある。
あと、このプログラムは index を使っているのが気になる。
この辺から解決しようか。

=> index をやめて、item.id にしたが解決しない。

cf. Using react-hooks find total and print average 
stackoverflow





---

買い物リスト
08-finished.tsx のバグ
入力時に total がカウントされない。
大元の記事では既にデータが入っている状態から始まっていた。
これはごまかしか?
いや。その状態からでも item を足して今の私のバージョンでは 1 が加わらない。

---

次に 【 React Hooks 入門】useState を使って買い物リストを作るチュートリアル
をやってみる。
How to Build a Shopping List Using React Hooks (w/ Starter Code and Video Walkthrough)
の翻訳

=> とりあえず動いた。 05-temp-working.tsx.txt

1. done, check の動きがわからない
2. done, check を checkbox にしたい
3. - 4? + のクエスチョンマークが何か?
4. 追加、を submit button に出来ないか
   autofocus はそれだけで autofocus
   enter で submit にしたい cf.react-todo-shin

---

元記事は dotinstall のどこなのか?

元記事 【 React Hooks 入門】useState を使って買い物リストを作るチュートリアル
react+typescript
total のあるプログラム => shopping list

How to Build a Shopping List Using React Hooks (w/ Starter Code and Video Walkthrough)

元記事 dotinstall の react 入門が名前は counter だが在庫管理プログラムで、過去に react-inventory-dot で作り始めている。!!!!

どちらが近いか?

react 入門

=> dotinstall は前回より少し進んだが考え方がわからないので、とりあえず中断する。
