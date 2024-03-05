# Generated by Django 3.2.24 on 2024-02-29 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_parse_email'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parse',
            name='college_name',
            field=models.CharField(default='Unknown', max_length=255),
        ),
        migrations.AlterField(
            model_name='parse',
            name='companies',
            field=models.CharField(default='Unknown', max_length=255),
        ),
        migrations.AlterField(
            model_name='parse',
            name='degree',
            field=models.CharField(default='Unknown', max_length=255),
        ),
        migrations.AlterField(
            model_name='parse',
            name='email',
            field=models.EmailField(default='Unknown', max_length=254),
        ),
        migrations.AlterField(
            model_name='parse',
            name='experience',
            field=models.CharField(default='Unknown', max_length=255),
        ),
        migrations.AlterField(
            model_name='parse',
            name='linkedin',
            field=models.URLField(blank=True, default='Unknown', null=True),
        ),
        migrations.AlterField(
            model_name='parse',
            name='location',
            field=models.CharField(default='Unknown', max_length=255),
        ),
        migrations.AlterField(
            model_name='parse',
            name='skills',
            field=models.CharField(default='Unknown', max_length=500),
        ),
        migrations.AlterField(
            model_name='parse',
            name='worked_as',
            field=models.CharField(default='Unknown', max_length=255),
        ),
    ]
