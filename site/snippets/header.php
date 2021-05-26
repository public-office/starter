<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="<?= $site->description() ?>">
    <meta name="keywords" content="<?= $site->keywords() ?>">
    <title><?= $site->title() ?></title>
    <?= css('assets/css/style.css?v='.sha1_file('assets/css/style.css')) ?>
    <?= js('assets/js/vendor/jquery.min.js') ?>
    <?= js('assets/js/vendor/images.js') ?>
    <?= js('assets/js/vendor/interact.min.js') ?>
    <?= js('assets/js/script.js?v='.sha1_file('assets/js/script.js')) ?>
  </head>
  <body>
