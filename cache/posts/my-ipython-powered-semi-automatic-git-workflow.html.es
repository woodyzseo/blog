
<div class="text_cell_render border-box-sizing rendered_html">
<p>This is the last post of this year, so I try to do my best to give you something interesting to think about...</p>
<p>In this case, I will show you <em>my git workflow</em>... and you know there are a lot of workflows out there... and probably better than mine, but I just want to share with you the place where I find myself comfortable.</p>
<p>And yes... <em>my git workflow</em> is also powered by <strong>IPython</strong> (I am very repetitive when I love a project!). And it is a <em>semi-automatic</em> one, using the <strong>IPython</strong> notebooks (<em>ipynbs</em>) as a sort of templates, transforming them into a new conceptual entity: the <strong>ipytmpl</strong> (and yes, I love to invent names too!). <!-- TEASER_END --></p>
<p>Because my workflow have essentially two cycles, in this post, I will show you the general set up of the environment and the first <em>Short</em> cycle, leaving the second <em>Extended</em> cycle (and other details) for other post (after the new year, of course).</p>
<p>I will also show you my workflow with a <em>real</em> <strong>PR</strong> (pull-request) to the <strong>IPython</strong> project.</p>
<p>Are you ready? Here we go...</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Get-everything-ready...">Get everything ready...<a class="anchor-link" href="#Get-everything-ready...">&#182;</a></h2>
</div>

<div class="text_cell_render border-box-sizing rendered_html">
<p>First, we need to set up the environment to make our work:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Check the current working directory:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[1]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">pwd</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt output_prompt">
    Out[1]:</div>
<div class="box-flex1 output_subarea output_pyout">


<pre>
u&apos;/media/datos/Desarrollos&apos;
</pre>

</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Make a new folder to isolate our work and cd into it:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[2]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">!</span>mkdir devel_example
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[3]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">cd</span> <span class="n">devel_example</span><span class="o">/</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
/media/datos/Desarrollos/devel_example

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote>
<p><strong>NOTE</strong>: You can avoid these steps opening the notebook in the proper directory, but in this case I want to have the example isolated to not overwrite my current development environment.</p>
</blockquote>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Load variables with useful information:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[4]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">project_name</span> <span class="o">=</span> <span class="s">&quot;ipython&quot;</span>
<span class="n">project_remote</span> <span class="o">=</span> <span class="s">&quot;git://github.com/ipython/ipython.git&quot;</span>
<span class="n">project_remote_name</span> <span class="o">=</span> <span class="s">&quot;origin&quot;</span>
<span class="n">my_fork_remote</span> <span class="o">=</span> <span class="s">&quot;git@github.com:damianavila/ipython.git&quot;</span>
<span class="n">my_fork_remote_name</span> <span class="o">=</span> <span class="s">&quot;damianavila&quot;</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Clone the project and connect the local repo with my <strong>Github</strong> fork:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[5]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Get a read-only copy of the project</span>
<span class="o">!</span>git clone <span class="nv">$project_remote</span>

<span class="c"># cd into the local project folder</span>
<span class="o">%</span><span class="k">cd</span> <span class="err">$</span><span class="n">project_name</span>

<span class="c"># Link the local repo with my Github fork</span>
<span class="o">!</span>git remote add <span class="nv">$my_fork_remote_name</span> <span class="nv">$my_fork_remote</span>

<span class="c"># Check remotes</span>
<span class="o">!</span>git remote -v
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Clonar en «ipython»...
remote: Reusing existing pack: 96757, done.[K
remote: Counting objects: 82, done.[K
remote: Compressing objects:   1% (1/82)   [Kremote: Compressing objects:   2% (2/82)   [Kremote: Compressing objects:   3% (3/82)   [Kremote: Compressing objects:   4% (4/82)   [Kremote: Compressing objects:   6% (5/82)   [Kremote: Compressing objects:   7% (6/82)   [Kremote: Compressing objects:   8% (7/82)   [Kremote: Compressing objects:   9% (8/82)   [Kremote: Compressing objects:  10% (9/82)   [Kremote: Compressing objects:  12% (10/82)   [Kremote: Compressing objects:  13% (11/82)   [Kremote: Compressing objects:  14% (12/82)   [Kremote: Compressing objects:  15% (13/82)   [Kremote: Compressing objects:  17% (14/82)   [Kremote: Compressing objects:  18% (15/82)   [Kremote: Compressing objects:  19% (16/82)   [Kremote: Compressing objects:  20% (17/82)   [Kremote: Compressing objects:  21% (18/82)   [Kremote: Compressing objects:  23% (19/82)   [Kremote: Compressing objects:  24% (20/82)   [Kremote: Compressing objects:  25% (21/82)   [Kremote: Compressing objects:  26% (22/82)   [Kremote: Compressing objects:  28% (23/82)   [Kremote: Compressing objects:  29% (24/82)   [Kremote: Compressing objects:  30% (25/82)   [Kremote: Compressing objects:  31% (26/82)   [Kremote: Compressing objects:  32% (27/82)   [Kremote: Compressing objects:  34% (28/82)   [Kremote: Compressing objects:  35% (29/82)   [Kremote: Compressing objects:  36% (30/82)   [Kremote: Compressing objects:  37% (31/82)   [Kremote: Compressing objects:  39% (32/82)   [Kremote: Compressing objects:  40% (33/82)   [Kremote: Compressing objects:  41% (34/82)   [Kremote: Compressing objects:  42% (35/82)   [Kremote: Compressing objects:  43% (36/82)   [Kremote: Compressing objects:  45% (37/82)   [Kremote: Compressing objects:  46% (38/82)   [Kremote: Compressing objects:  47% (39/82)   [Kremote: Compressing objects:  48% (40/82)   [Kremote: Compressing objects:  50% (41/82)   [Kremote: Compressing objects:  51% (42/82)   [Kremote: Compressing objects:  52% (43/82)   [Kremote: Compressing objects:  53% (44/82)   [Kremote: Compressing objects:  54% (45/82)   [Kremote: Compressing objects:  56% (46/82)   [Kremote: Compressing objects:  57% (47/82)   [Kremote: Compressing objects:  58% (48/82)   [Kremote: Compressing objects:  59% (49/82)   [Kremote: Compressing objects:  60% (50/82)   [Kremote: Compressing objects:  62% (51/82)   [Kremote: Compressing objects:  63% (52/82)   [Kremote: Compressing objects:  64% (53/82)   [Kremote: Compressing objects:  65% (54/82)   [Kremote: Compressing objects:  67% (55/82)   [Kremote: Compressing objects:  68% (56/82)   [Kremote: Compressing objects:  69% (57/82)   [Kremote: Compressing objects:  70% (58/82)   [Kremote: Compressing objects:  71% (59/82)   [Kremote: Compressing objects:  73% (60/82)   [Kremote: Compressing objects:  74% (61/82)   [Kremote: Compressing objects:  75% (62/82)   [Kremote: Compressing objects:  76% (63/82)   [Kremote: Compressing objects:  78% (64/82)   [Kremote: Compressing objects:  79% (65/82)   [Kremote: Compressing objects:  80% (66/82)   [Kremote: Compressing objects:  81% (67/82)   [Kremote: Compressing objects:  82% (68/82)   [Kremote: Compressing objects:  84% (69/82)   [Kremote: Compressing objects:  85% (70/82)   [Kremote: Compressing objects:  86% (71/82)   [Kremote: Compressing objects:  87% (72/82)   [Kremote: Compressing objects:  89% (73/82)   [Kremote: Compressing objects:  90% (74/82)   [Kremote: Compressing objects:  91% (75/82)   [Kremote: Compressing objects:  92% (76/82)   [Kremote: Compressing objects:  93% (77/82)   [Kremote: Compressing objects:  95% (78/82)   [Kremote: Compressing objects:  96% (79/82)   [Kremote: Compressing objects:  97% (80/82)   [Kremote: Compressing objects:  98% (81/82)   [Kremote: Compressing objects: 100% (82/82)   [Kremote: Compressing objects: 100% (82/82), done.[K
Receiving objects:   0% (1/96839)   Receiving objects:   0% (838/96839), 180.00 KiB | 163 KiB/s   Receiving objects:   1% (969/96839), 180.00 KiB | 163 KiB/s   Receiving objects:   2% (1937/96839), 356.00 KiB | 220 KiB/s   Receiving objects:   2% (2517/96839), 532.00 KiB | 248 KiB/s   Receiving objects:   3% (2906/96839), 532.00 KiB | 248 KiB/s   Receiving objects:   4% (3874/96839), 724.00 KiB | 271 KiB/s   Receiving objects:   4% (4028/96839), 724.00 KiB | 271 KiB/s   Receiving objects:   5% (4842/96839), 916.00 KiB | 281 KiB/s   Receiving objects:   6% (5811/96839), 1.11 MiB | 302 KiB/s   Receiving objects:   6% (5934/96839), 1.11 MiB | 302 KiB/s   Receiving objects:   7% (6779/96839), 1.36 MiB | 321 KiB/s   Receiving objects:   8% (7748/96839), 1.63 MiB | 338 KiB/s   Receiving objects:   8% (8211/96839), 1.63 MiB | 338 KiB/s   Receiving objects:   9% (8716/96839), 1.63 MiB | 338 KiB/s   Receiving objects:  10% (9684/96839), 1.93 MiB | 388 KiB/s   Receiving objects:  10% (10510/96839), 2.19 MiB | 420 KiB/s   Receiving objects:  11% (10653/96839), 2.19 MiB | 420 KiB/s   Receiving objects:  12% (11621/96839), 2.19 MiB | 420 KiB/s   Receiving objects:  13% (12590/96839), 2.54 MiB | 453 KiB/s   Receiving objects:  14% (13558/96839), 2.54 MiB | 453 KiB/s   Receiving objects:  14% (14032/96839), 2.97 MiB | 508 KiB/s   Receiving objects:  15% (14526/96839), 2.97 MiB | 508 KiB/s   Receiving objects:  16% (15495/96839), 3.47 MiB | 572 KiB/s   Receiving objects:  16% (15566/96839), 3.47 MiB | 572 KiB/s   Receiving objects:  17% (16463/96839), 4.04 MiB | 661 KiB/s   Receiving objects:  17% (17318/96839), 4.71 MiB | 756 KiB/s   Receiving objects:  17% (17390/96839), 6.39 MiB | 1.01 MiB/s   Receiving objects:  18% (17432/96839), 7.40 MiB | 1.17 MiB/s   Receiving objects:  18% (17660/96839), 8.42 MiB | 1.33 MiB/s   Receiving objects:  18% (17826/96839), 10.43 MiB | 1.62 MiB/s   Receiving objects:  19% (18400/96839), 11.39 MiB | 1.74 MiB/s   Receiving objects:  20% (19368/96839), 11.39 MiB | 1.74 MiB/s   Receiving objects:  21% (20337/96839), 12.39 MiB | 1.83 MiB/s   Receiving objects:  21% (21161/96839), 12.39 MiB | 1.83 MiB/s   Receiving objects:  22% (21305/96839), 12.39 MiB | 1.83 MiB/s   Receiving objects:  22% (21760/96839), 13.82 MiB | 1.66 MiB/s   Receiving objects:  22% (21963/96839), 13.88 MiB | 1.49 MiB/s   Receiving objects:  22% (22221/96839), 14.14 MiB | 1.12 MiB/s   Receiving objects:  23% (22273/96839), 14.14 MiB | 1.12 MiB/s   Receiving objects:  23% (23228/96839), 14.57 MiB | 820 KiB/s   Receiving objects:  24% (23242/96839), 14.57 MiB | 820 KiB/s   Receiving objects:  24% (23563/96839), 15.26 MiB | 562 KiB/s   Receiving objects:  25% (24210/96839), 15.64 MiB | 437 KiB/s   Receiving objects:  25% (24276/96839), 16.49 MiB | 561 KiB/s   Receiving objects:  25% (24281/96839), 16.95 MiB | 641 KiB/s   Receiving objects:  25% (24393/96839), 18.11 MiB | 814 KiB/s   Receiving objects:  26% (25179/96839), 18.80 MiB | 923 KiB/s   Receiving objects:  27% (26147/96839), 18.80 MiB | 923 KiB/s   Receiving objects:  28% (27115/96839), 18.80 MiB | 923 KiB/s   Receiving objects:  28% (27486/96839), 19.55 MiB | 1.00 MiB/s   Receiving objects:  29% (28084/96839), 19.55 MiB | 1.00 MiB/s   Receiving objects:  30% (29052/96839), 19.55 MiB | 1.00 MiB/s   Receiving objects:  31% (30021/96839), 19.55 MiB | 1.00 MiB/s   Receiving objects:  32% (30989/96839), 19.55 MiB | 1.00 MiB/s   Receiving objects:  32% (31754/96839), 20.81 MiB | 1.12 MiB/s   Receiving objects:  33% (31957/96839), 20.81 MiB | 1.12 MiB/s   Receiving objects:  34% (32926/96839), 20.81 MiB | 1.12 MiB/s   Receiving objects:  35% (33894/96839), 21.17 MiB | 1.10 MiB/s   Receiving objects:  36% (34863/96839), 21.17 MiB | 1.10 MiB/s   Receiving objects:  36% (35541/96839), 21.17 MiB | 1.10 MiB/s   Receiving objects:  37% (35831/96839), 21.53 MiB | 1.09 MiB/s   Receiving objects:  38% (36799/96839), 21.53 MiB | 1.09 MiB/s   Receiving objects:  38% (37615/96839), 21.89 MiB | 1.07 MiB/s   Receiving objects:  38% (37632/96839), 22.96 MiB | 941 KiB/s   Receiving objects:  39% (37768/96839), 23.32 MiB | 853 KiB/s   Receiving objects:  39% (38133/96839), 23.32 MiB | 853 KiB/s   Receiving objects:  40% (38736/96839), 23.68 MiB | 732 KiB/s   Receiving objects:  40% (39474/96839), 24.04 MiB | 731 KiB/s   Receiving objects:  41% (39704/96839), 24.40 MiB | 730 KiB/s   Receiving objects:  41% (40563/96839), 24.77 MiB | 731 KiB/s   Receiving objects:  42% (40673/96839), 25.13 MiB | 731 KiB/s   Receiving objects:  43% (41641/96839), 25.13 MiB | 731 KiB/s   Receiving objects:  44% (42610/96839), 25.49 MiB | 731 KiB/s   Receiving objects:  45% (43578/96839), 25.49 MiB | 731 KiB/s   Receiving objects:  45% (43720/96839), 25.85 MiB | 731 KiB/s   Receiving objects:  45% (43735/96839), 26.21 MiB | 731 KiB/s   Receiving objects:  45% (43740/96839), 27.29 MiB | 731 KiB/s   Receiving objects:  45% (43748/96839), 27.95 MiB | 716 KiB/s   Receiving objects:  45% (43834/96839), 28.38 MiB | 731 KiB/s   Receiving objects:  46% (44546/96839), 29.10 MiB | 731 KiB/s   Receiving objects:  47% (45515/96839), 29.10 MiB | 731 KiB/s   Receiving objects:  47% (46175/96839), 29.10 MiB | 731 KiB/s   Receiving objects:  48% (46483/96839), 29.10 MiB | 731 KiB/s   Receiving objects:  49% (47452/96839), 29.46 MiB | 731 KiB/s   Receiving objects:  50% (48420/96839), 29.46 MiB | 731 KiB/s   Receiving objects:  51% (49388/96839), 29.46 MiB | 731 KiB/s   Receiving objects:  52% (50357/96839), 29.82 MiB | 730 KiB/s   Receiving objects:  52% (50871/96839), 29.82 MiB | 730 KiB/s   Receiving objects:  53% (51325/96839), 30.18 MiB | 731 KiB/s   Receiving objects:  54% (52294/96839), 30.18 MiB | 731 KiB/s   Receiving objects:  55% (53262/96839), 30.55 MiB | 732 KiB/s   Receiving objects:  55% (53762/96839), 30.55 MiB | 732 KiB/s   Receiving objects:  56% (54230/96839), 30.55 MiB | 732 KiB/s   Receiving objects:  57% (55199/96839), 30.90 MiB | 731 KiB/s   Receiving objects:  58% (56167/96839), 31.27 MiB | 747 KiB/s   Receiving objects:  58% (56357/96839), 31.27 MiB | 747 KiB/s   Receiving objects:  59% (57136/96839), 31.27 MiB | 747 KiB/s   Receiving objects:  60% (58104/96839), 31.98 MiB | 765 KiB/s   Receiving objects:  61% (59072/96839), 31.98 MiB | 765 KiB/s   Receiving objects:  61% (59097/96839), 31.98 MiB | 765 KiB/s   Receiving objects:  62% (60041/96839), 32.34 MiB | 731 KiB/s   Receiving objects:  63% (61009/96839), 32.70 MiB | 731 KiB/s   Receiving objects:  63% (61187/96839), 32.70 MiB | 731 KiB/s   Receiving objects:  63% (61364/96839), 33.42 MiB | 731 KiB/s   Receiving objects:  64% (61977/96839), 33.78 MiB | 730 KiB/s   Receiving objects:  65% (62946/96839), 34.14 MiB | 731 KiB/s   Receiving objects:  66% (63914/96839), 34.14 MiB | 731 KiB/s   Receiving objects:  66% (64202/96839), 34.14 MiB | 731 KiB/s   Receiving objects:  67% (64883/96839), 34.50 MiB | 729 KiB/s   Receiving objects:  68% (65851/96839), 34.86 MiB | 731 KiB/s   Receiving objects:  68% (66395/96839), 34.86 MiB | 731 KiB/s   Receiving objects:  69% (66819/96839), 34.86 MiB | 731 KiB/s   Receiving objects:  70% (67788/96839), 35.22 MiB | 731 KiB/s   Receiving objects:  71% (68756/96839), 35.22 MiB | 731 KiB/s   Receiving objects:  72% (69725/96839), 35.58 MiB | 731 KiB/s   Receiving objects:  72% (70455/96839), 35.58 MiB | 731 KiB/s   Receiving objects:  73% (70693/96839), 35.58 MiB | 731 KiB/s   Receiving objects:  74% (71661/96839), 35.94 MiB | 731 KiB/s   Receiving objects:  75% (72630/96839), 36.30 MiB | 731 KiB/s   Receiving objects:  76% (73598/96839), 36.30 MiB | 731 KiB/s   Receiving objects:  76% (73882/96839), 36.30 MiB | 731 KiB/s   Receiving objects:  77% (74567/96839), 36.30 MiB | 731 KiB/s   Receiving objects:  78% (75535/96839), 36.30 MiB | 731 KiB/s   Receiving objects:  79% (76503/96839), 36.66 MiB | 731 KiB/s   Receiving objects:  79% (77171/96839), 36.86 MiB | 486 KiB/s   Receiving objects:  80% (77472/96839), 36.86 MiB | 486 KiB/s   Receiving objects:  80% (77519/96839), 37.43 MiB | 519 KiB/s   Receiving objects:  81% (78440/96839), 37.43 MiB | 519 KiB/s   Receiving objects:  82% (79408/96839), 37.43 MiB | 519 KiB/s   Receiving objects:  83% (80377/96839), 38.00 MiB | 553 KiB/s   Receiving objects:  84% (81345/96839), 38.00 MiB | 553 KiB/s   Receiving objects:  85% (82314/96839), 38.00 MiB | 553 KiB/s   Receiving objects:  86% (83282/96839), 38.00 MiB | 553 KiB/s   Receiving objects:  86% (84039/96839), 38.00 MiB | 553 KiB/s   Receiving objects:  87% (84250/96839), 38.00 MiB | 553 KiB/s   Receiving objects:  88% (85219/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  89% (86187/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  90% (87156/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  91% (88124/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  92% (89092/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  93% (90061/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  94% (91029/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  95% (91998/96839), 38.46 MiB | 567 KiB/s   Receiving objects:  95% (92335/96839), 40.21 MiB | 726 KiB/s   Receiving objects:  96% (92966/96839), 40.21 MiB | 726 KiB/s   Receiving objects:  97% (93934/96839), 40.21 MiB | 726 KiB/s   Receiving objects:  98% (94903/96839), 40.21 MiB | 726 KiB/s   Receiving objects:  99% (95871/96839), 40.57 MiB | 726 KiB/s   Receiving objects:  99% (96648/96839), 40.57 MiB | 726 KiB/s   remote: Total 96839 (delta 5), reused 31 (delta 0)[K
Receiving objects: 100% (96839/96839), 40.57 MiB | 726 KiB/s   Receiving objects: 100% (96839/96839), 40.92 MiB | 726 KiB/s, done.
Resolving deltas:   0% (0/70554)   Resolving deltas:   1% (733/70554)   Resolving deltas:   2% (1419/70554)   Resolving deltas:   3% (2142/70554)   Resolving deltas:   4% (2826/70554)   Resolving deltas:   5% (3633/70554)   Resolving deltas:   6% (4249/70554)   Resolving deltas:   7% (4953/70554)   Resolving deltas:   8% (5645/70554)   Resolving deltas:   9% (6351/70554)   Resolving deltas:  10% (7096/70554)   Resolving deltas:  11% (7763/70554)   Resolving deltas:  12% (8467/70554)   Resolving deltas:  13% (9176/70554)   Resolving deltas:  14% (9882/70554)   Resolving deltas:  15% (10603/70554)   Resolving deltas:  16% (11402/70554)   Resolving deltas:  17% (11998/70554)   Resolving deltas:  18% (12712/70554)   Resolving deltas:  19% (13471/70554)   Resolving deltas:  20% (14138/70554)   Resolving deltas:  21% (14871/70554)   Resolving deltas:  22% (15647/70554)   Resolving deltas:  23% (16228/70554)   Resolving deltas:  24% (16960/70554)   Resolving deltas:  25% (17667/70554)   Resolving deltas:  26% (18345/70554)   Resolving deltas:  27% (19052/70554)   Resolving deltas:  28% (19812/70554)   Resolving deltas:  29% (20501/70554)   Resolving deltas:  30% (21176/70554)   Resolving deltas:  31% (21987/70554)   Resolving deltas:  32% (22580/70554)   Resolving deltas:  33% (23294/70554)   Resolving deltas:  33% (23382/70554)   Resolving deltas:  34% (24000/70554)   Resolving deltas:  35% (24710/70554)   Resolving deltas:  36% (25401/70554)   Resolving deltas:  37% (26164/70554)   Resolving deltas:  38% (26850/70554)   Resolving deltas:  39% (27534/70554)   Resolving deltas:  40% (28335/70554)   Resolving deltas:  41% (28930/70554)   Resolving deltas:  42% (29658/70554)   Resolving deltas:  43% (30413/70554)   Resolving deltas:  44% (31135/70554)   Resolving deltas:  45% (31771/70554)   Resolving deltas:  46% (32606/70554)   Resolving deltas:  47% (33161/70554)   Resolving deltas:  48% (33900/70554)   Resolving deltas:  49% (34606/70554)   Resolving deltas:  50% (35584/70554)   Resolving deltas:  51% (35995/70554)   Resolving deltas:  52% (36722/70554)   Resolving deltas:  53% (37424/70554)   Resolving deltas:  54% (38114/70554)   Resolving deltas:  55% (38818/70554)   Resolving deltas:  56% (39520/70554)   Resolving deltas:  57% (40365/70554)   Resolving deltas:  58% (40989/70554)   Resolving deltas:  59% (41627/70554)   Resolving deltas:  60% (42338/70554)   Resolving deltas:  61% (43121/70554)   Resolving deltas:  62% (43760/70554)   Resolving deltas:  63% (44511/70554)   Resolving deltas:  64% (45200/70554)   Resolving deltas:  65% (45893/70554)   Resolving deltas:  66% (46639/70554)   Resolving deltas:  67% (47309/70554)   Resolving deltas:  68% (47977/70554)   Resolving deltas:  69% (48719/70554)   Resolving deltas:  70% (49705/70554)   Resolving deltas:  71% (50186/70554)   Resolving deltas:  72% (50856/70554)   Resolving deltas:  73% (51523/70554)   Resolving deltas:  74% (52218/70554)   Resolving deltas:  75% (52926/70554)   Resolving deltas:  76% (53639/70554)   Resolving deltas:  77% (54331/70554)   Resolving deltas:  78% (55034/70554)   Resolving deltas:  79% (55856/70554)   Resolving deltas:  80% (56467/70554)   Resolving deltas:  81% (57261/70554)   Resolving deltas:  82% (57856/70554)   Resolving deltas:  83% (58565/70554)   Resolving deltas:  84% (59374/70554)   Resolving deltas:  85% (60114/70554)   Resolving deltas:  85% (60197/70554)   Resolving deltas:  86% (60690/70554)   Resolving deltas:  87% (61405/70554)   Resolving deltas:  88% (62100/70554)   Resolving deltas:  89% (62803/70554)   Resolving deltas:  90% (63504/70554)   Resolving deltas:  91% (64205/70554)   Resolving deltas:  92% (64928/70554)   Resolving deltas:  93% (65618/70554)   Resolving deltas:  94% (66606/70554)   Resolving deltas:  95% (67108/70554)   Resolving deltas:  96% (67737/70554)   Resolving deltas:  97% (68654/70554)   Resolving deltas:  98% (69148/70554)   Resolving deltas:  99% (69958/70554)   Resolving deltas: 100% (70554/70554)   Resolving deltas: 100% (70554/70554), done.
/media/datos/Desarrollos/devel_example/ipython
damianavila	git@github.com:damianavila/ipython.git (fetch)
damianavila	git@github.com:damianavila/ipython.git (push)
origin	git://github.com/ipython/ipython.git (fetch)
origin	git://github.com/ipython/ipython.git (push)

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote>
<p><strong>NOTE</strong>: A lot of <em>git workflows</em> use <code>origin</code> to point to our fork and <code>upstream</code> to point to the project repo. But <em>I do not like</em> that configuration. It seems more natural to me to clone the project repo (the <code>origin</code> repo) and add a connection to my fork called <code>damianavila</code>... and the next steps take into consideration this last approach.</p>
</blockquote>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Short-cycle">Short cycle<a class="anchor-link" href="#Short-cycle">&#182;</a></h2>
</div>

<div class="text_cell_render border-box-sizing rendered_html">
<p>This short cycle just create a new <em>branch</em> to work on, make the needed changes in the source code and upload the local changes to our <strong>Github</strong> fork to finally submit a <em>pull-request</em>:</p>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Set up the <code>master</code> and <code>development</code> branch names:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[6]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="n">master_branch</span> <span class="o">=</span> <span class="s">&quot;master&quot;</span>
<span class="n">feature_branch</span> <span class="o">=</span> <span class="s">&quot;doc_post_serve&quot;</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Create a new branch from <code>master</code>:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[7]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Make sure we are in master branch</span>
<span class="o">!</span>git checkout <span class="nv">$master_branch</span>

<span class="c"># Pull the changes from origin/master</span>
<span class="o">!</span>git pull <span class="nv">$project_remote_name</span>

<span class="c"># Start a new branch to work on</span>
<span class="o">!</span>git checkout -b <span class="nv">$feature_branch</span>

<span class="c"># Check where we are</span>
<span class="o">!</span>git status
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Ya está en «master»
Already up-to-date.
Switched to a new branch &apos;doc_post_serve&apos;
# En la rama doc_post_serve
nothing to commit, working directory clean

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Make the changes you want to do:</li>
</ul>
<blockquote>
<p><strong>NOTE</strong>: In this example, I will update the <strong>IPython</strong> docs about some details using the <strong>IPython slides</strong> and the <code>post-serve</code> post-processor (<code>IPython.nbconvert</code>).</p>
</blockquote>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[9]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># list the files structure to find the needed files</span>
<span class="o">%</span><span class="k">ls</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
CONTRIBUTING.md  <span class="ansibold ansiblue">examples</span>/   MANIFEST.in  setupbase.py  <span class="ansibold ansigreen">setup.py</span>*
COPYING.txt      <span class="ansibold ansiblue">git-hooks</span>/  README.rst   <span class="ansibold ansigreen">setupegg.py</span>*  <span class="ansibold ansiblue">tools</span>/
<span class="ansibold ansiblue">docs</span>/            <span class="ansibold ansiblue">IPython</span>/    <span class="ansibold ansiblue">scripts</span>/     <span class="ansibold ansiblue">setupext</span>/     tox.ini

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[10]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%</span><span class="k">load</span> <span class="n">docs</span><span class="o">/</span><span class="n">source</span><span class="o">/</span><span class="n">interactive</span><span class="o">/</span><span class="n">nbconvert</span><span class="o">.</span><span class="n">rst</span>
<span class="c"># After executing %load, a new cell containing the source code will be added.</span>
<span class="c"># Be sure to add the next line (with the proper path) to overwrite the file</span>
<span class="c"># with you changes.</span>
<span class="c">#</span>
<span class="c"># %%writefile docs/source/interactive/nbconvert.rst</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[11]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="o">%%</span><span class="k">writefile</span> <span class="n">docs</span><span class="o">/</span><span class="n">source</span><span class="o">/</span><span class="n">interactive</span><span class="o">/</span><span class="n">nbconvert</span><span class="o">.</span><span class="n">rst</span>
<span class="o">..</span> <span class="n">_nbconvert</span><span class="p">:</span>

<span class="n">Converting</span> <span class="n">notebooks</span> <span class="n">to</span> <span class="n">other</span> <span class="n">formats</span>
<span class="o">=====================================</span>

<span class="n">Newly</span> <span class="n">added</span> <span class="ow">in</span> <span class="n">the</span> <span class="mf">1.0</span> <span class="n">release</span> <span class="n">of</span> <span class="n">IPython</span> <span class="ow">is</span> <span class="n">the</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">tool</span><span class="p">,</span> <span class="n">which</span> 
<span class="n">allows</span> <span class="n">you</span> <span class="n">to</span> <span class="n">convert</span> <span class="n">an</span> <span class="sb">``</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">notebook</span> <span class="n">document</span> <span class="nb">file</span> <span class="n">into</span> <span class="n">various</span> <span class="n">static</span> 
<span class="n">formats</span><span class="o">.</span> 

<span class="n">Currently</span><span class="p">,</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="ow">is</span> <span class="n">provided</span> <span class="k">as</span> <span class="n">a</span> <span class="n">command</span> <span class="n">line</span> <span class="n">tool</span><span class="p">,</span> <span class="n">run</span> <span class="k">as</span> <span class="n">a</span> <span class="n">script</span> 
<span class="n">using</span> <span class="n">IPython</span><span class="o">.</span> <span class="n">A</span> <span class="n">direct</span> <span class="n">export</span> <span class="n">capability</span> <span class="kn">from</span> <span class="nn">within</span> <span class="nn">the</span> 
<span class="n">IPython</span> <span class="n">Notebook</span> <span class="n">web</span> <span class="n">app</span> <span class="ow">is</span> <span class="n">planned</span><span class="o">.</span> 

<span class="n">The</span> <span class="n">command</span><span class="o">-</span><span class="n">line</span> <span class="n">syntax</span> <span class="n">to</span> <span class="n">run</span> <span class="n">the</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">script</span> <span class="ow">is</span><span class="p">::</span>

  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="o">--</span><span class="n">to</span> <span class="n">FORMAT</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>

<span class="n">This</span> <span class="n">will</span> <span class="n">convert</span> <span class="n">the</span> <span class="n">IPython</span> <span class="n">document</span> <span class="nb">file</span> <span class="sb">``</span><span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">into</span> <span class="n">the</span> <span class="n">output</span> 
<span class="n">format</span> <span class="n">given</span> <span class="n">by</span> <span class="n">the</span> <span class="sb">``</span><span class="n">FORMAT</span><span class="sb">``</span> <span class="n">string</span><span class="o">.</span>

<span class="n">The</span> <span class="n">default</span> <span class="n">output</span> <span class="n">format</span> <span class="ow">is</span> <span class="n">html</span><span class="p">,</span> <span class="k">for</span> <span class="n">which</span> <span class="n">the</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span><span class="sb">``</span> <span class="n">argument</span> <span class="n">may</span> <span class="n">be</span> 
<span class="n">omitted</span><span class="p">::</span>
  
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>

<span class="n">IPython</span> <span class="n">provides</span> <span class="n">a</span> <span class="n">few</span> <span class="n">templates</span> <span class="k">for</span> <span class="n">some</span> <span class="n">output</span> <span class="n">formats</span><span class="p">,</span> <span class="ow">and</span> <span class="n">these</span> <span class="n">can</span> <span class="n">be</span>
<span class="n">specified</span> <span class="n">via</span> <span class="n">an</span> <span class="n">additional</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span><span class="sb">``</span> <span class="n">argument</span><span class="o">.</span>

<span class="n">The</span> <span class="n">currently</span> <span class="n">supported</span> <span class="n">export</span> <span class="n">formats</span> <span class="n">are</span><span class="p">:</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">html</span><span class="sb">``</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">full</span><span class="sb">``</span> <span class="p">(</span><span class="n">default</span><span class="p">)</span>
  
    <span class="n">A</span> <span class="n">full</span> <span class="n">static</span> <span class="n">HTML</span> <span class="n">render</span> <span class="n">of</span> <span class="n">the</span> <span class="n">notebook</span><span class="o">.</span>
    <span class="n">This</span> <span class="n">looks</span> <span class="n">very</span> <span class="n">similar</span> <span class="n">to</span> <span class="n">the</span> <span class="n">interactive</span> <span class="n">view</span><span class="o">.</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">basic</span><span class="sb">``</span>
  
    <span class="n">Simplified</span> <span class="n">HTML</span><span class="p">,</span> <span class="n">useful</span> <span class="k">for</span> <span class="n">embedding</span> <span class="ow">in</span> <span class="n">webpages</span><span class="p">,</span> <span class="n">blogs</span><span class="p">,</span> <span class="n">etc</span><span class="o">.</span>
    <span class="n">This</span> <span class="n">excludes</span> <span class="n">HTML</span> <span class="n">headers</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">latex</span><span class="sb">``</span>

  <span class="n">Latex</span> <span class="n">export</span><span class="o">.</span>  <span class="n">This</span> <span class="n">generates</span> <span class="sb">``</span><span class="n">NOTEBOOK_NAME</span><span class="o">.</span><span class="n">tex</span><span class="sb">``</span> <span class="nb">file</span><span class="p">,</span>
  <span class="n">ready</span> <span class="k">for</span> <span class="n">export</span><span class="o">.</span>  <span class="n">You</span> <span class="n">can</span> <span class="n">automatically</span> <span class="n">run</span> <span class="n">latex</span> <span class="n">on</span> <span class="n">it</span> <span class="n">to</span> <span class="n">generate</span> <span class="n">a</span> <span class="n">PDF</span>
  <span class="n">by</span> <span class="n">adding</span> <span class="sb">``</span><span class="o">--</span><span class="n">post</span> <span class="n">PDF</span><span class="sb">``</span><span class="o">.</span>
  
  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">article</span><span class="sb">``</span> <span class="p">(</span><span class="n">default</span><span class="p">)</span>
  
    <span class="n">Latex</span> <span class="n">article</span><span class="p">,</span> <span class="n">derived</span> <span class="kn">from</span> <span class="nn">Sphinx</span><span class="s">&#39;s howto template.</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">book</span><span class="sb">``</span>
  
    <span class="n">Latex</span> <span class="n">book</span><span class="p">,</span> <span class="n">derived</span> <span class="kn">from</span> <span class="nn">Sphinx</span><span class="s">&#39;s manual template.</span>

  <span class="o">-</span> <span class="sb">``</span><span class="o">--</span><span class="n">template</span> <span class="n">basic</span><span class="sb">``</span>
  
    <span class="n">Very</span> <span class="n">basic</span> <span class="n">latex</span> <span class="n">output</span> <span class="o">-</span> <span class="n">mainly</span> <span class="n">meant</span> <span class="k">as</span> <span class="n">a</span> <span class="n">starting</span> <span class="n">point</span> <span class="k">for</span> <span class="n">custom</span> <span class="n">templates</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">slides</span><span class="sb">``</span>

  <span class="n">This</span> <span class="n">generates</span> <span class="n">a</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">HTML</span> <span class="n">slideshow</span><span class="o">.</span>
  <span class="n">It</span> <span class="n">must</span> <span class="n">be</span> <span class="n">served</span> <span class="n">by</span> <span class="n">an</span> <span class="n">HTTP</span> <span class="n">server</span><span class="o">.</span> <span class="n">The</span> <span class="n">easiest</span> <span class="n">way</span> <span class="n">to</span> <span class="n">do</span> <span class="n">this</span> <span class="ow">is</span> <span class="n">adding</span>
  <span class="sb">``</span><span class="o">--</span><span class="n">post</span> <span class="n">serve</span><span class="sb">``</span> <span class="n">on</span> <span class="n">the</span> <span class="n">command</span><span class="o">-</span><span class="n">line</span><span class="o">.</span> <span class="n">The</span> <span class="sb">``</span><span class="o">--</span><span class="n">post</span> <span class="n">serve</span><span class="sb">``</span> <span class="n">post</span><span class="o">-</span><span class="n">processor</span> 
  <span class="n">proxies</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">requests</span> <span class="n">to</span> <span class="n">a</span> <span class="n">CDN</span> <span class="k">if</span> <span class="n">no</span> <span class="n">local</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">library</span> <span class="ow">is</span> <span class="n">present</span><span class="o">.</span> 
  <span class="n">For</span> <span class="n">low</span> <span class="n">connectivity</span> <span class="n">environments</span><span class="p">,</span> <span class="n">just</span> <span class="n">place</span> <span class="n">the</span> <span class="n">Reveal</span><span class="o">.</span><span class="n">js</span> <span class="n">library</span> <span class="ow">in</span> <span class="n">the</span> 
  <span class="n">same</span> <span class="n">directory</span> <span class="n">where</span> <span class="n">your_talk</span><span class="o">.</span><span class="n">slides</span><span class="o">.</span><span class="n">html</span> <span class="ow">is</span> <span class="n">located</span> <span class="ow">or</span> <span class="n">point</span> <span class="n">to</span> <span class="n">another</span> 
  <span class="n">directory</span> <span class="n">using</span> <span class="n">the</span> <span class="sb">``</span><span class="o">--</span><span class="n">reveal</span><span class="o">-</span><span class="n">prefix</span><span class="sb">``</span> <span class="n">alias</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">markdown</span><span class="sb">``</span>

  <span class="n">Simple</span> <span class="n">markdown</span> <span class="n">output</span><span class="o">.</span>  <span class="n">Markdown</span> <span class="n">cells</span> <span class="n">are</span> <span class="n">unaffected</span><span class="p">,</span>
  <span class="ow">and</span> <span class="n">code</span> <span class="n">cells</span> <span class="n">are</span> <span class="n">placed</span> <span class="ow">in</span> <span class="n">triple</span><span class="o">-</span><span class="n">backtick</span> <span class="p">(</span><span class="sb">``````</span><span class="err">`</span><span class="p">)</span> <span class="n">blocks</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">rst</span><span class="sb">``</span>

  <span class="n">Basic</span> <span class="n">reStructuredText</span> <span class="n">output</span><span class="o">.</span> <span class="n">Useful</span> <span class="k">as</span> <span class="n">a</span> <span class="n">starting</span> <span class="n">point</span> <span class="k">for</span> <span class="n">embedding</span> <span class="n">notebooks</span>
  <span class="ow">in</span> <span class="n">Sphinx</span> <span class="n">docs</span><span class="o">.</span>

<span class="o">*</span> <span class="sb">``</span><span class="o">--</span><span class="n">to</span> <span class="n">python</span><span class="sb">``</span>

  <span class="n">Convert</span> <span class="n">a</span> <span class="n">notebook</span> <span class="n">to</span> <span class="n">an</span> <span class="n">executable</span> <span class="n">Python</span> <span class="n">script</span><span class="o">.</span>
  <span class="n">This</span> <span class="ow">is</span> <span class="n">the</span> <span class="n">simplest</span> <span class="n">way</span> <span class="n">to</span> <span class="n">get</span> <span class="n">a</span> <span class="n">Python</span> <span class="n">script</span> <span class="n">out</span> <span class="n">of</span> <span class="n">a</span> <span class="n">notebook</span><span class="o">.</span>
  <span class="n">If</span> <span class="n">there</span> <span class="n">were</span> <span class="nb">any</span> <span class="n">magics</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">notebook</span><span class="p">,</span> <span class="n">this</span> <span class="n">may</span> <span class="n">only</span> <span class="n">be</span> <span class="n">executable</span> <span class="kn">from</span>
  <span class="nn">an</span> <span class="nn">IPython</span> <span class="nn">session.</span>
  
<span class="o">..</span> <span class="n">note</span><span class="p">::</span>

  <span class="n">nbconvert</span> <span class="n">uses</span> <span class="n">pandoc_</span> <span class="n">to</span> <span class="n">convert</span> <span class="n">between</span> <span class="n">various</span> <span class="n">markup</span> <span class="n">languages</span><span class="p">,</span>
  <span class="n">so</span> <span class="n">pandoc</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">dependency</span> <span class="n">of</span> <span class="n">most</span> <span class="n">nbconvert</span> <span class="n">transforms</span><span class="p">,</span>
  <span class="n">excluding</span> <span class="n">Markdown</span> <span class="ow">and</span> <span class="n">Python</span><span class="o">.</span>

<span class="o">..</span> <span class="n">_pandoc</span><span class="p">:</span> <span class="n">http</span><span class="p">:</span><span class="o">//</span><span class="n">johnmacfarlane</span><span class="o">.</span><span class="n">net</span><span class="o">/</span><span class="n">pandoc</span><span class="o">/</span>

<span class="n">The</span> <span class="n">output</span> <span class="nb">file</span> <span class="n">created</span> <span class="n">by</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">will</span> <span class="n">have</span> <span class="n">the</span> <span class="n">same</span> <span class="n">base</span> <span class="n">name</span> <span class="k">as</span>
<span class="n">the</span> <span class="n">notebook</span> <span class="ow">and</span> <span class="n">will</span> <span class="n">be</span> <span class="n">placed</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">current</span> <span class="n">working</span> <span class="n">directory</span><span class="o">.</span> <span class="n">Any</span>
<span class="n">supporting</span> <span class="n">files</span> <span class="p">(</span><span class="n">graphics</span><span class="p">,</span> <span class="n">etc</span><span class="p">)</span> <span class="n">will</span> <span class="n">be</span> <span class="n">placed</span> <span class="ow">in</span> <span class="n">a</span> <span class="n">new</span> <span class="n">directory</span> <span class="k">with</span> <span class="n">the</span>
<span class="n">same</span> <span class="n">base</span> <span class="n">name</span> <span class="k">as</span> <span class="n">the</span> <span class="n">notebook</span><span class="p">,</span> <span class="n">suffixed</span> <span class="k">with</span> <span class="sb">``</span><span class="n">_files</span><span class="sb">``</span><span class="p">::</span>

  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>
  <span class="err">$</span> <span class="n">ls</span>
  <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span>   <span class="n">notebook</span><span class="o">.</span><span class="n">html</span>    <span class="n">notebook_files</span><span class="o">/</span>

<span class="n">For</span> <span class="n">simple</span> <span class="n">single</span><span class="o">-</span><span class="nb">file</span> <span class="n">output</span><span class="p">,</span> <span class="n">such</span> <span class="k">as</span> <span class="n">html</span><span class="p">,</span> <span class="n">markdown</span><span class="p">,</span> <span class="n">etc</span><span class="o">.</span><span class="p">,</span>
<span class="n">the</span> <span class="n">output</span> <span class="n">may</span> <span class="n">be</span> <span class="n">sent</span> <span class="n">to</span> <span class="n">standard</span> <span class="n">output</span> <span class="k">with</span><span class="p">::</span>
    
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="o">--</span><span class="n">to</span> <span class="n">markdown</span> <span class="n">notebook</span><span class="o">.</span><span class="n">ipynb</span> <span class="o">--</span><span class="n">stdout</span>
    
<span class="n">Multiple</span> <span class="n">notebooks</span> <span class="n">can</span> <span class="n">be</span> <span class="n">specified</span> <span class="kn">from</span> <span class="nn">the</span> <span class="nn">command</span> <span class="nn">line</span><span class="p">::</span>
    
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook</span><span class="o">*.</span><span class="n">ipynb</span>
  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="n">notebook1</span><span class="o">.</span><span class="n">ipynb</span> <span class="n">notebook2</span><span class="o">.</span><span class="n">ipynb</span>
    
<span class="ow">or</span> <span class="n">via</span> <span class="n">a</span> <span class="nb">list</span> <span class="ow">in</span> <span class="n">a</span> <span class="n">configuration</span> <span class="nb">file</span><span class="p">,</span> <span class="n">say</span> <span class="sb">``</span><span class="n">mycfg</span><span class="o">.</span><span class="n">py</span><span class="sb">``</span><span class="p">,</span> <span class="n">containing</span> <span class="n">the</span> <span class="n">text</span><span class="p">::</span>

  <span class="n">c</span> <span class="o">=</span> <span class="n">get_config</span><span class="p">()</span>
  <span class="n">c</span><span class="o">.</span><span class="n">NbConvertApp</span><span class="o">.</span><span class="n">notebooks</span> <span class="o">=</span> <span class="p">[</span><span class="s">&quot;notebook1.ipynb&quot;</span><span class="p">,</span> <span class="s">&quot;notebook2.ipynb&quot;</span><span class="p">]</span>

<span class="ow">and</span> <span class="n">using</span> <span class="n">the</span> <span class="n">command</span><span class="p">::</span>

  <span class="err">$</span> <span class="n">ipython</span> <span class="n">nbconvert</span> <span class="o">--</span><span class="n">config</span> <span class="n">mycfg</span><span class="o">.</span><span class="n">py</span>


<span class="o">..</span> <span class="n">_notebook_format</span><span class="p">:</span>

<span class="n">LaTeX</span> <span class="n">citations</span>
<span class="o">---------------</span>

<span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">now</span> <span class="n">has</span> <span class="n">support</span> <span class="k">for</span> <span class="n">LaTeX</span> <span class="n">citations</span><span class="o">.</span> <span class="n">With</span> <span class="n">this</span> <span class="n">capability</span> <span class="n">you</span>
<span class="n">can</span><span class="p">:</span>

<span class="o">*</span> <span class="n">Manage</span> <span class="n">citations</span> <span class="n">using</span> <span class="n">BibTeX</span><span class="o">.</span>
<span class="o">*</span> <span class="n">Cite</span> <span class="n">those</span> <span class="n">citations</span> <span class="ow">in</span> <span class="n">Markdown</span> <span class="n">cells</span> <span class="n">using</span> <span class="n">HTML</span> <span class="n">data</span> <span class="n">attributes</span><span class="o">.</span>
<span class="o">*</span> <span class="n">Have</span> <span class="sb">``</span><span class="n">nbconvert</span><span class="sb">``</span> <span class="n">generate</span> <span class="n">proper</span> <span class="n">LaTeX</span> <span class="n">citations</span> <span class="ow">and</span> <span class="n">run</span> <span class="n">BibTeX</span><span class="o">.</span>

<span class="n">For</span> <span class="n">an</span> <span class="n">example</span> <span class="n">of</span> <span class="n">how</span> <span class="n">this</span> <span class="n">works</span><span class="p">,</span> <span class="n">please</span> <span class="n">see</span> <span class="n">the</span> <span class="n">citations</span> <span class="n">example</span> <span class="ow">in</span>
<span class="n">the</span> <span class="n">nbconvert</span><span class="o">-</span><span class="n">examples_</span> <span class="n">repository</span><span class="o">.</span>

<span class="o">..</span> <span class="n">_nbconvert</span><span class="o">-</span><span class="n">examples</span><span class="p">:</span> <span class="n">https</span><span class="p">:</span><span class="o">//</span><span class="n">github</span><span class="o">.</span><span class="n">com</span><span class="o">/</span><span class="n">ipython</span><span class="o">/</span><span class="n">nbconvert</span><span class="o">-</span><span class="n">examples</span>

<span class="n">Notebook</span> <span class="n">JSON</span> <span class="nb">file</span> <span class="n">format</span>
<span class="o">-------------------------</span>

<span class="n">Notebook</span> <span class="n">documents</span> <span class="n">are</span> <span class="n">JSON</span> <span class="n">files</span> <span class="k">with</span> <span class="n">an</span> <span class="sb">``</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">extension</span><span class="p">,</span> <span class="n">formatted</span>
<span class="k">as</span> <span class="n">legibly</span> <span class="k">as</span> <span class="n">possible</span> <span class="k">with</span> <span class="n">minimal</span> <span class="n">extra</span> <span class="n">indentation</span> <span class="ow">and</span> <span class="n">cell</span> <span class="n">content</span> <span class="n">broken</span>
<span class="n">across</span> <span class="n">lines</span> <span class="n">to</span> <span class="n">make</span> <span class="n">them</span> <span class="n">reasonably</span> <span class="n">friendly</span> <span class="n">to</span> <span class="n">use</span> <span class="ow">in</span> <span class="n">version</span><span class="o">-</span><span class="n">control</span>
<span class="n">workflows</span><span class="o">.</span>  <span class="n">You</span> <span class="n">should</span> <span class="n">be</span> <span class="n">very</span> <span class="n">careful</span> <span class="k">if</span> <span class="n">you</span> <span class="n">ever</span> <span class="n">manually</span> <span class="n">edit</span> <span class="n">this</span> <span class="n">JSON</span>
<span class="n">data</span><span class="p">,</span> <span class="k">as</span> <span class="n">it</span> <span class="ow">is</span> <span class="n">extremely</span> <span class="n">easy</span> <span class="n">to</span> <span class="n">corrupt</span> <span class="n">its</span> <span class="n">internal</span> <span class="n">structure</span> <span class="ow">and</span> <span class="n">make</span> <span class="n">the</span>
<span class="nb">file</span> <span class="n">impossible</span> <span class="n">to</span> <span class="n">load</span><span class="o">.</span>  <span class="n">In</span> <span class="n">general</span><span class="p">,</span> <span class="n">you</span> <span class="n">should</span> <span class="n">consider</span> <span class="n">the</span> <span class="n">notebook</span> <span class="k">as</span> <span class="n">a</span>
<span class="nb">file</span> <span class="n">meant</span> <span class="n">only</span> <span class="n">to</span> <span class="n">be</span> <span class="n">edited</span> <span class="n">by</span> <span class="n">the</span> <span class="n">IPython</span> <span class="n">Notebook</span> <span class="n">app</span> <span class="n">itself</span><span class="p">,</span> <span class="ow">not</span> <span class="k">for</span> 
<span class="n">hand</span><span class="o">-</span><span class="n">editing</span><span class="o">.</span>

<span class="o">..</span> <span class="n">note</span><span class="p">::</span>

     <span class="n">Binary</span> <span class="n">data</span> <span class="n">such</span> <span class="k">as</span> <span class="n">figures</span> <span class="n">are</span> <span class="n">also</span> <span class="n">saved</span> <span class="n">directly</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">JSON</span> <span class="nb">file</span><span class="o">.</span>  
     <span class="n">This</span> <span class="n">provides</span> <span class="n">convenient</span> <span class="n">single</span><span class="o">-</span><span class="nb">file</span> <span class="n">portability</span><span class="p">,</span> <span class="n">but</span> <span class="n">means</span> <span class="n">that</span> <span class="n">the</span> 
     <span class="n">files</span> <span class="n">can</span> <span class="n">be</span> <span class="n">large</span><span class="p">;</span> <span class="n">a</span> <span class="sb">``</span><span class="n">diff</span><span class="sb">``</span> <span class="n">of</span> <span class="n">binary</span> <span class="n">data</span> <span class="ow">is</span> <span class="n">also</span> <span class="ow">not</span> <span class="n">very</span> 
     <span class="n">meaningful</span><span class="o">.</span>  <span class="n">Since</span> <span class="n">the</span> <span class="n">binary</span> <span class="n">blobs</span> <span class="n">are</span> <span class="n">encoded</span> <span class="ow">in</span> <span class="n">a</span> <span class="n">single</span> <span class="n">line</span><span class="p">,</span> <span class="n">they</span> 
     <span class="n">affect</span> <span class="n">only</span> <span class="n">one</span> <span class="n">line</span> <span class="n">of</span> <span class="n">the</span> <span class="sb">``</span><span class="n">diff</span><span class="sb">``</span> <span class="n">output</span><span class="p">,</span> <span class="n">but</span> <span class="n">they</span> <span class="n">are</span> <span class="n">typically</span> <span class="n">very</span> 
     <span class="nb">long</span> <span class="n">lines</span><span class="o">.</span>  <span class="n">You</span> <span class="n">can</span> <span class="n">use</span> <span class="n">the</span> <span class="sb">``</span><span class="n">Cell</span> <span class="o">|</span> <span class="n">All</span> <span class="n">Output</span> <span class="o">|</span> <span class="n">Clear</span><span class="sb">``</span> <span class="n">menu</span> <span class="n">option</span> <span class="n">to</span> 
     <span class="n">remove</span> <span class="nb">all</span> <span class="n">output</span> <span class="kn">from</span> <span class="nn">a</span> <span class="nn">notebook</span> <span class="nn">prior</span> <span class="nn">to</span> <span class="nn">committing</span> <span class="nn">it</span> <span class="nn">to</span> <span class="nn">version</span> 
     <span class="n">control</span><span class="p">,</span> <span class="k">if</span> <span class="n">this</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">concern</span><span class="o">.</span>

<span class="n">The</span> <span class="n">notebook</span> <span class="n">server</span> <span class="n">can</span> <span class="n">also</span> <span class="n">generate</span> <span class="n">a</span> <span class="n">pure</span> <span class="n">Python</span> <span class="n">version</span> <span class="n">of</span> <span class="n">your</span> <span class="n">notebook</span><span class="p">,</span> 
<span class="n">using</span> <span class="n">the</span> <span class="sb">``</span><span class="n">File</span> <span class="o">|</span> <span class="n">Download</span> <span class="k">as</span><span class="sb">``</span> <span class="n">menu</span> <span class="n">option</span><span class="o">.</span> <span class="n">The</span> <span class="n">resulting</span> <span class="sb">``</span><span class="o">.</span><span class="n">py</span><span class="sb">``</span> <span class="nb">file</span> <span class="n">will</span> 
<span class="n">contain</span> <span class="nb">all</span> <span class="n">the</span> <span class="n">code</span> <span class="n">cells</span> <span class="kn">from</span> <span class="nn">your</span> <span class="nn">notebook</span> <span class="nn">verbatim</span><span class="p">,</span> <span class="ow">and</span> <span class="nb">all</span> <span class="n">Markdown</span> <span class="n">cells</span> 
<span class="n">prepended</span> <span class="k">with</span> <span class="n">a</span> <span class="n">comment</span> <span class="n">marker</span><span class="o">.</span>  <span class="n">The</span> <span class="n">separation</span> <span class="n">between</span> <span class="n">code</span> <span class="ow">and</span> <span class="n">Markdown</span>
<span class="n">cells</span> <span class="ow">is</span> <span class="n">indicated</span> <span class="k">with</span> <span class="n">special</span> <span class="n">comments</span> <span class="ow">and</span> <span class="n">there</span> <span class="ow">is</span> <span class="n">a</span> <span class="n">header</span> <span class="n">indicating</span> <span class="n">the</span>
<span class="n">format</span> <span class="n">version</span><span class="o">.</span>  <span class="n">All</span> <span class="n">output</span> <span class="ow">is</span> <span class="n">removed</span> <span class="n">when</span> <span class="n">exporting</span> <span class="n">to</span> <span class="n">Python</span><span class="o">.</span>

<span class="n">As</span> <span class="n">an</span> <span class="n">example</span><span class="p">,</span> <span class="n">consider</span> <span class="n">a</span> <span class="n">simple</span> <span class="n">notebook</span> <span class="n">called</span> <span class="sb">``</span><span class="n">simple</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="n">which</span> 
<span class="n">contains</span> <span class="n">one</span> <span class="n">Markdown</span> <span class="n">cell</span><span class="p">,</span> <span class="k">with</span> <span class="n">the</span> <span class="n">content</span> <span class="sb">``</span><span class="n">The</span> <span class="n">simplest</span> <span class="n">notebook</span><span class="o">.</span><span class="sb">``</span><span class="p">,</span> <span class="n">one</span> 
<span class="n">code</span> <span class="nb">input</span> <span class="n">cell</span> <span class="k">with</span> <span class="n">the</span> <span class="n">content</span> <span class="sb">``</span><span class="k">print</span> <span class="s">&quot;Hello, IPython!&quot;</span><span class="sb">``</span><span class="p">,</span> <span class="ow">and</span> <span class="n">the</span> 
<span class="n">corresponding</span> <span class="n">output</span><span class="o">.</span>

<span class="n">The</span> <span class="n">contents</span> <span class="n">of</span> <span class="n">the</span> <span class="n">notebook</span> <span class="n">document</span> <span class="sb">``</span><span class="n">simple</span><span class="o">.</span><span class="n">ipynb</span><span class="sb">``</span> <span class="ow">is</span> <span class="n">the</span> <span class="n">following</span> <span class="n">JSON</span> 
<span class="n">container</span><span class="p">::</span>

  <span class="p">{</span>
   <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{</span>
    <span class="s">&quot;name&quot;</span><span class="p">:</span> <span class="s">&quot;simple&quot;</span>
   <span class="p">},</span>
   <span class="s">&quot;nbformat&quot;</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
   <span class="s">&quot;nbformat_minor&quot;</span><span class="p">:</span> <span class="mi">0</span><span class="p">,</span>
   <span class="s">&quot;worksheets&quot;</span><span class="p">:</span> <span class="p">[</span>
    <span class="p">{</span>
     <span class="s">&quot;cells&quot;</span><span class="p">:</span> <span class="p">[</span>
      <span class="p">{</span>
       <span class="s">&quot;cell_type&quot;</span><span class="p">:</span> <span class="s">&quot;markdown&quot;</span><span class="p">,</span>
       <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{},</span>
       <span class="s">&quot;source&quot;</span><span class="p">:</span> <span class="s">&quot;The simplest notebook.&quot;</span>
      <span class="p">},</span>
      <span class="p">{</span>
       <span class="s">&quot;cell_type&quot;</span><span class="p">:</span> <span class="s">&quot;code&quot;</span><span class="p">,</span>
       <span class="s">&quot;collapsed&quot;</span><span class="p">:</span> <span class="n">false</span><span class="p">,</span>
       <span class="s">&quot;input&quot;</span><span class="p">:</span> <span class="s">&quot;print </span><span class="se">\&quot;</span><span class="s">Hello, IPython</span><span class="se">\&quot;</span><span class="s">&quot;</span><span class="p">,</span>
       <span class="s">&quot;language&quot;</span><span class="p">:</span> <span class="s">&quot;python&quot;</span><span class="p">,</span>
       <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{},</span>
       <span class="s">&quot;outputs&quot;</span><span class="p">:</span> <span class="p">[</span>
        <span class="p">{</span>
         <span class="s">&quot;output_type&quot;</span><span class="p">:</span> <span class="s">&quot;stream&quot;</span><span class="p">,</span>
         <span class="s">&quot;stream&quot;</span><span class="p">:</span> <span class="s">&quot;stdout&quot;</span><span class="p">,</span>
         <span class="s">&quot;text&quot;</span><span class="p">:</span> <span class="s">&quot;Hello, IPython</span><span class="se">\n</span><span class="s">&quot;</span>
        <span class="p">}</span>
       <span class="p">],</span>
       <span class="s">&quot;prompt_number&quot;</span><span class="p">:</span> <span class="mi">1</span>
      <span class="p">}</span>
     <span class="p">],</span>
     <span class="s">&quot;metadata&quot;</span><span class="p">:</span> <span class="p">{}</span>
    <span class="p">}</span>
   <span class="p">]</span>
  <span class="p">}</span>


<span class="n">The</span> <span class="n">corresponding</span> <span class="n">Python</span> <span class="n">script</span> <span class="ow">is</span><span class="p">::</span>

  <span class="c"># -*- coding: utf-8 -*-</span>
  <span class="c"># &lt;nbformat&gt;3.0&lt;/nbformat&gt;</span>

  <span class="c"># &lt;markdowncell&gt;</span>

  <span class="c"># The simplest notebook.</span>

  <span class="c"># &lt;codecell&gt;</span>

  <span class="k">print</span> <span class="s">&quot;Hello, IPython&quot;</span>

<span class="n">Note</span> <span class="n">that</span> <span class="n">indeed</span> <span class="n">the</span> <span class="n">output</span> <span class="n">of</span> <span class="n">the</span> <span class="n">code</span> <span class="n">cell</span><span class="p">,</span> <span class="n">which</span> <span class="ow">is</span> <span class="n">present</span> <span class="ow">in</span> <span class="n">the</span> <span class="n">JSON</span> 
<span class="n">container</span><span class="p">,</span> <span class="n">has</span> <span class="n">been</span> <span class="n">removed</span> <span class="ow">in</span> <span class="n">the</span> <span class="sb">``</span><span class="o">.</span><span class="n">py</span><span class="sb">``</span> <span class="n">script</span><span class="o">.</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Overwriting docs/source/interactive/nbconvert.rst

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Check the status and diff of your modifications:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[12]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Check status</span>
<span class="o">!</span>git status
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
# En la rama doc_post_serve
# Cambios no preparados para el commit:
#   (use «git add &lt;archivo&gt;...» para actualizar lo que se ejecutará)
#   (use «git checkout -- &lt;archivo&gt;...« para descartar cambios en le directorio de trabajo)
#
#	modificado:   docs/source/interactive/nbconvert.rst
#
no hay cambios agregados al commit (use «git add» o «git commit -a»)

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[13]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># See the diff</span>
<span class="o">!</span>git diff
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
diff --git a/docs/source/interactive/nbconvert.rst b/docs/source/interactive/nbconvert.rst
index 1789a62..610edf0 100644
--- a/docs/source/interactive/nbconvert.rst
+++ b/docs/source/interactive/nbconvert.rst
@@ -61,8 +61,12 @@ The currently supported export formats are:
 * &#96;&#96;--to slides&#96;&#96;
 
   This generates a Reveal.js HTML slideshow.
-  It must be served by an HTTP server.  The easiest way to do this is adding
-  &#96;&#96;--post serve&#96;&#96; on the command-line.
+  It must be served by an HTTP server. The easiest way to do this is adding
+  &#96;&#96;--post serve&#96;&#96; on the command-line. The &#96;&#96;--post serve&#96;&#96; post-processor 
+  proxies Reveal.js requests to a CDN if no local Reveal.js library is present. 
+  For low connectivity environments, just place the Reveal.js library in the 
+  same directory where your_talk.slides.html is located or point to another 
+  directory using the &#96;&#96;--reveal-prefix&#96;&#96; alias.
 
 * &#96;&#96;--to markdown&#96;&#96;
 
@@ -224,4 +228,3 @@ The corresponding Python script is::
 
 Note that indeed the output of the code cell, which is present in the JSON 
 container, has been removed in the &#96;&#96;.py&#96;&#96; script.
-

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Add the changes an commit them:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[14]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Add the modified files to the stage</span>
<span class="o">!</span>git add .
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[15]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># And do your commit</span>
<span class="o">!</span>git commit -am <span class="s2">&quot;Added --post-serve explanation into the nbconvert docs.&quot;</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
[doc_post_serve c87ac2f] Added --post-serve explanation into the nbconvert docs.
 1 file changed, 6 insertions(+), 3 deletions(-)

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li>Finally, push your local development branch to your <strong>Github</strong> fork:</li>
</ul>
</div>
<div class="cell border-box-sizing code_cell vbox">
<div class="input hbox">
<div class="prompt input_prompt">
In&nbsp;[16]:
</div>
<div class="input_area box-flex1">
<div class="highlight"><pre><span class="c"># Push updates from your local branch to your github branch</span>
<span class="o">!</span>git push <span class="nv">$my_fork_remote_name</span> <span class="nv">$feature_branch</span>
</pre></div>

<i class="icon-hand-up icon-large" style="float:right; margin-top:8px; margin-right:10px">&nbsp;&nbsp;Click me!</i>
</div>
</div>

<div class="output_hidden">

<div class="vbox output_wrapper">
<div class="output vbox">


<div class="hbox output_area"><div class="prompt"></div>
<div class="box-flex1 output_subarea output_stream output_stdout">
<pre>
Counting objects: 8732, done.
Delta compression using up to 4 threads.
Compressing objects:   0% (1/2767)   Compressing objects:   1% (28/2767)   Compressing objects:   2% (56/2767)   Compressing objects:   3% (84/2767)   Compressing objects:   4% (111/2767)   Compressing objects:   5% (139/2767)   Compressing objects:   6% (167/2767)   Compressing objects:   7% (194/2767)   Compressing objects:   8% (222/2767)   Compressing objects:   9% (250/2767)   Compressing objects:  10% (277/2767)   Compressing objects:  11% (305/2767)   Compressing objects:  12% (333/2767)   Compressing objects:  13% (360/2767)   Compressing objects:  14% (388/2767)   Compressing objects:  15% (416/2767)   Compressing objects:  16% (443/2767)   Compressing objects:  17% (471/2767)   Compressing objects:  18% (499/2767)   Compressing objects:  19% (526/2767)   Compressing objects:  20% (554/2767)   Compressing objects:  21% (582/2767)   Compressing objects:  22% (609/2767)   Compressing objects:  23% (637/2767)   Compressing objects:  24% (665/2767)   Compressing objects:  25% (692/2767)   Compressing objects:  26% (720/2767)   Compressing objects:  27% (748/2767)   Compressing objects:  28% (775/2767)   Compressing objects:  29% (803/2767)   Compressing objects:  30% (831/2767)   Compressing objects:  31% (858/2767)   Compressing objects:  32% (886/2767)   Compressing objects:  33% (914/2767)   Compressing objects:  34% (941/2767)   Compressing objects:  35% (969/2767)   Compressing objects:  36% (997/2767)   Compressing objects:  37% (1024/2767)   Compressing objects:  38% (1052/2767)   Compressing objects:  39% (1080/2767)   Compressing objects:  40% (1107/2767)   Compressing objects:  41% (1135/2767)   Compressing objects:  42% (1163/2767)   Compressing objects:  43% (1190/2767)   Compressing objects:  44% (1218/2767)   Compressing objects:  45% (1246/2767)   Compressing objects:  46% (1273/2767)   Compressing objects:  47% (1301/2767)   Compressing objects:  48% (1329/2767)   Compressing objects:  49% (1356/2767)   Compressing objects:  50% (1384/2767)   Compressing objects:  51% (1412/2767)   Compressing objects:  52% (1439/2767)   Compressing objects:  53% (1467/2767)   Compressing objects:  54% (1495/2767)   Compressing objects:  55% (1522/2767)   Compressing objects:  56% (1550/2767)   Compressing objects:  57% (1578/2767)   Compressing objects:  58% (1605/2767)   Compressing objects:  59% (1633/2767)   Compressing objects:  60% (1661/2767)   Compressing objects:  61% (1688/2767)   Compressing objects:  62% (1716/2767)   Compressing objects:  63% (1744/2767)   Compressing objects:  64% (1771/2767)   Compressing objects:  65% (1799/2767)   Compressing objects:  66% (1827/2767)   Compressing objects:  67% (1854/2767)   Compressing objects:  68% (1882/2767)   Compressing objects:  69% (1910/2767)   Compressing objects:  70% (1937/2767)   Compressing objects:  71% (1965/2767)   Compressing objects:  72% (1993/2767)   Compressing objects:  73% (2020/2767)   Compressing objects:  74% (2048/2767)   Compressing objects:  75% (2076/2767)   Compressing objects:  76% (2103/2767)   Compressing objects:  77% (2131/2767)   Compressing objects:  78% (2159/2767)   Compressing objects:  79% (2186/2767)   Compressing objects:  80% (2214/2767)   Compressing objects:  81% (2242/2767)   Compressing objects:  82% (2269/2767)   Compressing objects:  83% (2297/2767)   Compressing objects:  84% (2325/2767)   Compressing objects:  85% (2352/2767)   Compressing objects:  86% (2380/2767)   Compressing objects:  87% (2408/2767)   Compressing objects:  88% (2435/2767)   Compressing objects:  89% (2463/2767)   Compressing objects:  90% (2491/2767)   Compressing objects:  91% (2518/2767)   Compressing objects:  92% (2546/2767)   Compressing objects:  93% (2574/2767)   Compressing objects:  94% (2601/2767)   Compressing objects:  95% (2629/2767)   Compressing objects:  96% (2657/2767)   Compressing objects:  97% (2684/2767)   Compressing objects:  98% (2712/2767)   Compressing objects:  99% (2740/2767)   Compressing objects: 100% (2767/2767)   Compressing objects: 100% (2767/2767), done.
Writing objects:   0% (1/7842)   Writing objects:   1% (79/7842)   Writing objects:   2% (157/7842)   Writing objects:   3% (236/7842)   Writing objects:   4% (314/7842)   Writing objects:   5% (393/7842)   Writing objects:   6% (471/7842)   Writing objects:   7% (549/7842)   Writing objects:   8% (628/7842)   Writing objects:   9% (706/7842)   Writing objects:  10% (785/7842)   Writing objects:  11% (863/7842)   Writing objects:  12% (942/7842)   Writing objects:  13% (1020/7842)   Writing objects:  14% (1099/7842)   Writing objects:  15% (1177/7842)   Writing objects:  16% (1255/7842)   Writing objects:  17% (1335/7842)   Writing objects:  18% (1415/7842)   Writing objects:  19% (1496/7842)   Writing objects:  20% (1570/7842)   Writing objects:  21% (1647/7842)   Writing objects:  22% (1727/7842)   Writing objects:  23% (1804/7842)   Writing objects:  24% (1883/7842)   Writing objects:  25% (1961/7842)   Writing objects:  26% (2041/7842)   Writing objects:  27% (2119/7842)   Writing objects:  28% (2198/7842)   Writing objects:  29% (2275/7842)   Writing objects:  30% (2358/7842)   Writing objects:  31% (2439/7842)   Writing objects:  32% (2510/7842)   Writing objects:  33% (2588/7842)   Writing objects:  34% (2669/7842)   Writing objects:  35% (2745/7842)   Writing objects:  36% (2825/7842)   Writing objects:  37% (2902/7842)   Writing objects:  38% (2980/7842)   Writing objects:  39% (3059/7842)   Writing objects:  40% (3137/7842)   Writing objects:  41% (3216/7842)   Writing objects:  42% (3294/7842)   Writing objects:  43% (3373/7842)   Writing objects:  44% (3451/7842)   Writing objects:  45% (3529/7842)   Writing objects:  46% (3608/7842)   Writing objects:  47% (3686/7842)   Writing objects:  48% (3765/7842)   Writing objects:  49% (3843/7842)   Writing objects:  50% (3921/7842)   Writing objects:  51% (4000/7842)   Writing objects:  52% (4079/7842)   Writing objects:  53% (4159/7842)   Writing objects:  54% (4235/7842)   Writing objects:  55% (4314/7842)   Writing objects:  56% (4392/7842)   Writing objects:  57% (4470/7842)   Writing objects:  58% (4549/7842)   Writing objects:  59% (4627/7842)   Writing objects:  60% (4706/7842)   Writing objects:  61% (4785/7842)   Writing objects:  62% (4863/7842)   Writing objects:  63% (4942/7842)   Writing objects:  64% (5019/7842)   Writing objects:  65% (5098/7842)   Writing objects:  66% (5176/7842)   Writing objects:  67% (5255/7842)   Writing objects:  68% (5333/7842)   Writing objects:  69% (5411/7842)   Writing objects:  70% (5490/7842)   Writing objects:  71% (5568/7842)   Writing objects:  72% (5647/7842)   Writing objects:  73% (5725/7842)   Writing objects:  74% (5804/7842)   Writing objects:  75% (5888/7842)   Writing objects:  76% (5960/7842)   Writing objects:  77% (6039/7842)   Writing objects:  78% (6117/7842)   Writing objects:  79% (6196/7842)   Writing objects:  80% (6274/7842)   Writing objects:  81% (6353/7842)   Writing objects:  82% (6431/7842)   Writing objects:  83% (6509/7842)   Writing objects:  84% (6588/7842)   Writing objects:  85% (6666/7842)   Writing objects:  86% (6745/7842)   Writing objects:  87% (6823/7842)   Writing objects:  88% (6903/7842)   Writing objects:  89% (6980/7842)   Writing objects:  90% (7058/7842)   Writing objects:  91% (7138/7842)   Writing objects:  92% (7215/7842)   Writing objects:  93% (7294/7842)   Writing objects:  94% (7373/7842)   Writing objects:  95% (7450/7842)   Writing objects:  96% (7529/7842)   Writing objects:  97% (7607/7842)   Writing objects:  98% (7686/7842)   Writing objects:  99% (7764/7842)   Writing objects: 100% (7842/7842)   Writing objects: 100% (7842/7842), 1.44 MiB, done.
Total 7842 (delta 5520), reused 7275 (delta 4971)
To git@github.com:damianavila/ipython.git
 * [new branch]      doc_post_serve -&gt; doc_post_serve

</pre>
</div>
</div>

</div>
</div>

</div>

</div>
<div class="text_cell_render border-box-sizing rendered_html">
<blockquote>
<p><strong>NOTE</strong>: The merging of your <strong>Github</strong> development branch into the master is done via <em>pull-request</em> on the <strong>Github</strong> website. For reference, you can see the proposed <strong>PR</strong> here: https://github.com/ipython/ipython/pull/4751</p>
</blockquote>
</div>
<div class="text_cell_render border-box-sizing rendered_html">
<p>As you can see, this workflow is very <em>simple</em>... and with the aid of this <strong>ipytmpl</strong> is easier than <em>before</em> (before = making the same but in your traditional console).</p>
<p>You set up the environment, fill the variables to use <em>a posteriori</em>, and you have only to be concern about the changes you want to introduce (or remove) from the source code. All the other steps, all those git calls are predetermined and will be called whereas you advance in the workflow...</p>
<p>After making the <strong>PR</strong> at the <strong>Github</strong> website, you will receive some feedback and if you have to modified something, just start the short cycle again... Sometimes you will need more... I mean, because you are working in a <em>communitary project</em>, if somebody changes the same file as you, there will be some conflicts at the <em>merge</em> step, so it will be necessary to rebase the &quot;thing&quot;. But this is the central idea of the second <em>Extended</em> cycle which I will describe you in a second part of this post.</p>
<p>As always, I am waiting for your comments and critics!</p>
<p>OK, too long... I hope you did not get bored!</p>
<p>Have a nice <strong>New Year</strong>! And I see you in 2014 ;-)</p>
<p>Cheers.</p>
<p>Damián</p>
</div>