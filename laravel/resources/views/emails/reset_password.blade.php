@component('mail::message')
{{ $name }} 様

下記のボタンをクリックしてパスワードを変更してください
@component('mail::button', ['url' => $url])
パスワードをリセット
@endcomponent

管理者より
@endcomponent
