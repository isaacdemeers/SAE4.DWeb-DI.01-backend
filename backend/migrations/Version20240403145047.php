<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240403145047 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE watch_list (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, movie_id INT DEFAULT NULL, INDEX IDX_152B584BA76ED395 (user_id), INDEX IDX_152B584B8F93B6FC (movie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE watch_list ADD CONSTRAINT FK_152B584BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE watch_list ADD CONSTRAINT FK_152B584B8F93B6FC FOREIGN KEY (movie_id) REFERENCES movie (id)');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64983DD0D94');
        $this->addSql('DROP INDEX IDX_8D93D64983DD0D94 ON user');
        $this->addSql('ALTER TABLE user DROP watchlist_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE watch_list DROP FOREIGN KEY FK_152B584BA76ED395');
        $this->addSql('ALTER TABLE watch_list DROP FOREIGN KEY FK_152B584B8F93B6FC');
        $this->addSql('DROP TABLE watch_list');
        $this->addSql('ALTER TABLE user ADD watchlist_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64983DD0D94 FOREIGN KEY (watchlist_id) REFERENCES watchlist (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_8D93D64983DD0D94 ON user (watchlist_id)');
    }
}
