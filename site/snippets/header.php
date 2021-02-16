<!doctype html>
<html>
<head>
  <title><?= $site->title() ?> - <?= $page->title() ?></title>
  <meta name="viewport" content="width=device-width"/>
  <meta charset="utf-8" />
  <? if(file_exists('dist/index.js')): ?>
    <?= Bnomei\Fingerprint::js('dist/index.js') ?>
  <? endif ?>
  <? if(file_exists('dist/index.css')): ?>
    <?= Bnomei\Fingerprint::css('dist/index.css') ?>
  <? endif ?>
</head>
<body>