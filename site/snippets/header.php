<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $site->title() ?></title>
    <?= css('assets/css/style.css?v='.sha1_file('assets/css/style.css')) ?>
    <?= js('assets/js/jquery.min.js') ?>
    <?= js('assets/js/images.js') ?>
    <?= js('assets/js/script.js?v='.sha1_file('assets/js/script.js')) ?>
  </head>
  <body>
