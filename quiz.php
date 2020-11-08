
<?php /*Template Name: Благодарность*/ ?>

<?php get_header(); ?>

<?php 
if (!isset ($_POST['uri'])) {
    echo 'Нет данных для обработки. Попробуйте <a href="index.html">Перейти на главную</a>';
    exit();
}

$uri = isset($_POST['uri']) ? $_POST['uri'] : "";

$platform = isset($_POST['platform']) ? $_POST['platform'] : "";
$number_of_screens = isset($_POST['number-of-screens']) ? $_POST['number-of-screens'] : "";

$design = isset($_POST['design']) ? $_POST['design'] : "";
$functionality = isset($_POST['functionality']) ? $_POST['functionality'] : "";
$use_rights = isset($_POST['use-rights']) ? $_POST['use-rights'] : "";

$services = isset($_POST['services']) ? $_POST['services'] : "";
$sum =  isset($_POST['sum']) ? $_POST['sum'] : "";
$name = isset($_POST['name_input']) ? $_POST['name_input'] : "";
$phone = isset($_POST['phone']) ? $_POST['phone'] : "";
$email_client = isset($_POST['email_input']) ? $_POST['email_input'] : "";



// Отправка письма
 
$address = "adminwm@mail.ru";

$mes = "Вам оставили заявку на расчет проекта
Имя: $name\n
Телефон: $phone\n
E-mail: $email_client\n

	Мобильные платформы: $platform\n
	Колличество экранов: $number-of-screens\n
	Дизайн: $design\n
	Функционал: $functionality\n
	Права пользования: $use-rights\n
	Сторонние сервисы: $services\n";
	
	
$sub = "Рассчет стоимости";

$email = "SBS";

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
