# Generated by Django 4.0 on 2022-12-06 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_doctor_homepage_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='Medicament',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.DateField()),
                ('end_time', models.DateField()),
                ('name', models.CharField(max_length=255)),
                ('is_active', models.BooleanField()),
            ],
        ),
    ]
