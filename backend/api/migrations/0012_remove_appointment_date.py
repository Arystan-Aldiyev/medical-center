# Generated by Django 4.0 on 2022-12-06 12:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_appointment_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appointment',
            name='date',
        ),
    ]
