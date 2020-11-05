<?php /*Template Name: Благодарность*/ ?>

<?php get_header(); ?>

<?php 
if (!isset ($_POST['uri'])) {
    echo 'Нет данных для обработки. Попробуйте <a href="/">Перейти на главную</a>';
    exit();
}

$uri = isset($_POST['uri']) ? $_POST['uri'] : "";

$type_home = isset($_POST['type-home1']) ? $_POST['type-home1'] : "";
$type_home = isset($_POST['type-home2']) ? $_POST['type-home2'] : "";

$type_repair = isset($_POST['type-repair']) ? $_POST['type-repair'] : "";
$type_repair2 = isset($_POST['type-repair2']) ? $_POST['type-repair2'] : "";
$type_repair_line = implode(', ', $type_repair);
$purchase = isset($_POST['purchase']) ? $_POST['purchase'] : "";
$purchase_line = implode(', ', $purchase);

$repair_date = isset($_POST['repair-date']) ? $_POST['repair-date'] : "";
/*$repair_price = isset($_POST['repair-price']) ? $_POST['repair-price'] : "";
$price_input = isset($_POST['price_input']) ? $_POST['price_input'] : "";*/

$name = isset($_POST['name_input']) ? $_POST['name_input'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$email_client = isset($_POST['email_input']) ? $_POST['email_input'] : "";

// Отправка письма
 
$address = "adminwm@mail.ru";

$mes = "Имя: $name\n
Телефон: $phone\n
E-mail: $email_client\n

	Мобильные платформы: $type_home1\n
	Колличество экранов: $type_home2\n
	Дизайн: $type-repair\n
	Функционал: $type-repair2\n
	Права пользования: $purchase\n
	Сторонние сервисы: $repair_date\n
	
	Вариант(ы) ремонта: $type_repair_line\n
	Дизайн-проект (есть?): $design_project\n
	Помощь в закупке материалов: $purchase_line\n
	
	Планируемая дата ремонта: $repair_date\n
	Планируемая сумма ремонта: $repair_price\n
	Своя сумма на ремонт: $price_input";
	
$sub = "Рассчет стоимости ремонта";

$email = "no-reply@site.ru";

$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:".$email);
?>

<main role="main">
  
	<section id="main-content"><div class="wrapper box">

		<?php //get_sidebar(); ?>

		<div id="content" class="block-12">  

			<?php if (have_posts()) : ?>	
			<?php while (have_posts()) : the_post(); ?>  

				<div id="post-content" class="area">
					<?php echo do_shortcode( '[site-breadcrumbs]' ); ?>
					<h1 id="title"><?php the_title(); ?></h1>
					<?php the_content(); ?>
				</div>

			<?php endwhile; ?>
			<?php endif; ?> 

		</div>  

	</div></section>

</main>

<?php get_footer(); ?>