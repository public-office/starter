<? snippet('header') ?>

    <main>
      <section class="main">
        <? $main = page('home') ?>
        <h1>‘Means of Production’ is <span class="result">a gesture of intimacy</span><span class="result">a question of value</span><span class="result">a blurring of authorship</span><span class="result">a form of reciprocity</span><span class="result">a context for support</span><span class="result">not a single act</span><span class="result">a blurring of soft wares</span><span class="result">a practice of unknowing</span></h1>
        <div id="top">
          <img class="item" src="<?= url('assets/tmp/istockphoto-933123884-612x612.jpg') ?>" alt="">
          <img class="item" src="<?= url('assets/tmp/Census03.jpg') ?>" alt="">
          <img class="item" src="<?= url('assets/tmp/793e6faeb4ff4e2d9759809d3dd66a79.jpg') ?>" alt="">
        </div>

        <?= smartypants($main->text()->kirbytext()) ?>
      </section>
      <section class="people">
        <div class="people-list">
          <span>Featuring:</span>
          <? foreach(page('people')->children()->listed() as $person): ?>
            <span><?= $person->title() ?></span>
          <? endforeach ?>
        </div>
      </section>
      <section class="library">
        <h2>Reading List</h2>

        <div class="library-tags">
          <? $tags = page('library')->children()->listed()->pluck('tags', ',', true) ?>
          <? sort($tags); ?>
          <? foreach($tags as $tag): ?>
            <a class="tag" href="#"><span data-filter="<?= str::slug($tag) ?>"><?= $tag ?></span> <? $num = page('library')->children()->listed()->filterBy('tags', '*=', $tag)->count() ?>(<?= $num ?>)</a>
          <? endforeach ?>
        </div>
        <ol class="library-column">
          <div>
            <? foreach(page('library')->children()->listed()->slice(1, 7) as $single): ?>
              <li class="active" data-tags="<? foreach($single->tags()->split() as $tag): ?><?= str::slug($tag) ?> <? endforeach ?>"><!--span class="number"><?= $single->num() ?>. </span--><a href="<? if($single->hasFiles()): ?><?= $single->files()->first()->url() ?><? else: ?><?= $single->article() ?><? endif ?>" target="_blank"><span><span class="title"><?= $single->title() ?></span>, <?= $single->author() ?> (<?= $single->year() ?>), <?= $single->publisher() ?>, <? if($single->hasFiles()): ?><?= str::upper($single->files()->first()->extension()) ?><? endif ?></span></a></li>
            <? endforeach ?>
          </div>
          <div>
            <? foreach(page('library')->children()->listed()->slice(8, 20) as $single): ?>
              <li class="active" data-tags="<? foreach($single->tags()->split() as $tag): ?><?= str::slug($tag) ?> <? endforeach ?>"><!--span class="number"><?= $single->num() ?>. </span--><a href="<? if($single->hasFiles()): ?><?= $single->files()->first()->url() ?><? else: ?><?= $single->article() ?><? endif ?>" target="_blank"><span><span class="title"><?= $single->title() ?></span>, <?= $single->author() ?> (<?= $single->year() ?>), <?= $single->publisher() ?>, <? if($single->hasFiles()): ?><?= str::upper($single->files()->first()->extension()) ?><? endif ?></span></a></li>
            <? endforeach ?>
          </div>

        </ol>
      </section>

    </main>

<? snippet('footer') ?>
